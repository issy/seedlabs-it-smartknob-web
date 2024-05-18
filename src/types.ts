import { PB } from "./proto/dist/protos";

interface SmartKnobLog {
  timestamp: number;
  isVerbose: boolean;
  level: PB.LogLevel;
  origin: string;
  msg: string;
}

enum Item {
  LOG = "LOG",
  MOTOR_CALIBRATION = "MOTOR_CALIBRATION",
  STRAIN_CALIBRATION = "STRAIN_CALIBRATION",
}

export type { SmartKnobLog, Item };
