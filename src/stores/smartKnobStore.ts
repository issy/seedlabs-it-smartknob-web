import { create } from "zustand";
import { PB, SETTINGS } from "../proto/dist/protos";
import { SmartKnobLog } from "../types";
import { SmartKnobWebSerial } from "../webserial";

interface SmartKnobState {
  knob: PB.Knob;
  serial?: SmartKnobWebSerial;
  state: PB.SmartKnobState;
  settings: KnobConfig;
  log: SmartKnobLog[];
  fullLog: SmartKnobLog[];
}

interface KnobConfig {
  screen: {
    dim: boolean;
    timeout: number;
    maxBright: number;
    minBright: number;
  };
  ledRing: {
    dim: boolean;
    maxBright: number;
    minBright: number;
    color: number;
    beacon: {
      enabled: boolean;
      brightness: number;
      color: number;
    };
  };
}

// export const useSmartKnobStore = create<SmartKnobState>((set) => ({
export const useSmartKnobStore = create<SmartKnobState>((_) => ({
  knob: PB.Knob.create(),
  // setKnob: (knob: PB.Knob) => set({ knob }),

  serial: undefined,

  state: PB.SmartKnobState.create(),

  settings: {
    screen: { dim: true, timeout: 30, maxBright: 100, minBright: 10 },
    ledRing: {
      dim: true,
      maxBright: 100,
      minBright: 10,
      color: 32896,
      beacon: { enabled: true, brightness: 10, color: 32896 },
    },
  },
  // setState: (state: PB.SmartKnobState) => set({ state }),

  log: [],
  // setLog: (log: SmartKnobLog[]) => set({ log }),

  fullLog: [],
  // setFullLog: (fullLog: SmartKnobLog[]) => set({ fullLog }),
}));
