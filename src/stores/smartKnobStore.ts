import { create } from "zustand";
import { PB } from "../proto/dist/protos";
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
    enabled: boolean;
    dim: boolean;
    maxBright: number;
    minBright: number;
    color: string;
    beacon: {
      enabled: boolean;
      brightness: number;
      color: string;
    };
  };
}

export const useSmartKnobStore = create<SmartKnobState>(() => ({
  knob: PB.Knob.create(),

  serial: undefined,

  state: PB.SmartKnobState.create(),

  settings: {
    screen: { dim: true, timeout: 30, maxBright: 100, minBright: 30 },
    ledRing: {
      enabled: true,
      dim: true,
      maxBright: 100,
      minBright: 0,
      color: "#008080",
      beacon: { enabled: true, brightness: 30, color: "#008080" }, //32896
    },
  },

  log: [],

  fullLog: [],
}));
