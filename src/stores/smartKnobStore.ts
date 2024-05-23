import { create } from "zustand";
import { PB } from "../proto/dist/protos";
import { SmartKnobLog } from "../types";
import { SmartKnobWebSerial } from "../webserial";

interface SmartKnobState {
  knob: PB.Knob;
  serial?: SmartKnobWebSerial;
  state: PB.SmartKnobState;
  log: SmartKnobLog[];
  fullLog: SmartKnobLog[];
}

// export const useSmartKnobStore = create<SmartKnobState>((set) => ({
export const useSmartKnobStore = create<SmartKnobState>((_) => ({
  knob: PB.Knob.create(),
  // setKnob: (knob: PB.Knob) => set({ knob }),

  serial: undefined,

  state: PB.SmartKnobState.create(),
  // setState: (state: PB.SmartKnobState) => set({ state }),

  log: [],
  // setLog: (log: SmartKnobLog[]) => set({ log }),

  fullLog: [],
  // setFullLog: (fullLog: SmartKnobLog[]) => set({ fullLog }),
}));
