import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { PB } from "./proto/dist/protos";
import { SmartKnobWebSerial } from "./webserial";
import { exhaustiveCheck, findNClosest, lerp, NoUndefinedField } from "./util";
import { IconChevronCompactDown, IconChevronDown } from "@tabler/icons-react";
import { MessageCallback } from "./webserial/core";

interface SmartKnobLog {
  timestamp: number;
  isVerbose: boolean;
  level: PB.LogLevel;
  origin?: string;
  msg: string;
}

function App() {
  const [macAddress, setMacAddress] = useState<string | null>(null);
  const [smartKnob, setSmartKnob] = useState<SmartKnobWebSerial | null>(null);
  const [smartKnobState, setSmartKnobState] = useState<
    NoUndefinedField<PB.ISmartKnobState>
  >(
    PB.SmartKnobState.toObject(
      PB.SmartKnobState.create({ config: PB.SmartKnobConfig.create() }),
      {
        defaults: true,
      },
    ) as NoUndefinedField<PB.ISmartKnobState>,
  );
  const [newLogMessage, setNewLogMessage] = useState<SmartKnobLog>();
  const [log, setLog] = useState<Array<SmartKnobLog>>([]);
  const [fullLog, setFullLog] = useState<Array<SmartKnobLog>>([]);
  const logRef = useRef<HTMLOListElement>(null);
  const [selectedLogLevels, setSelectedLogLevels] = useState<
    Array<PB.LogLevel>
  >([PB.LogLevel.INFO, PB.LogLevel.WARNING, PB.LogLevel.ERROR]);
  var _selectedLogLevels = selectedLogLevels;
  const [verboseLogging, setVerboseLogging] = useState<boolean>(false);
  const [originLogging, setOriginLogging] = useState<boolean>(false);

  const connectToSerial = async () => {
    try {
      if (navigator.serial) {
        // previousPressNonceRef.current = 0;
        // receivedPressNonceRef.current = false;

        const serialPort = await navigator.serial.requestPort({
          filters: SmartKnobWebSerial.USB_DEVICE_FILTERS,
        });
        serialPort.addEventListener("disconnect", () => {
          setSmartKnob(null);
        });
        const smartKnob = new SmartKnobWebSerial(serialPort, onMessage);
        setSmartKnob(smartKnob);
        await smartKnob.openAndLoop();
      } else {
        console.error("Web Serial API is not supported in this browser.");
        setSmartKnob(null);
      }
    } catch (error) {
      console.error("Error with serial port:", error);
      setSmartKnob(null);
    }
  };

  const onMessage = (message: PB.FromSmartKnob) => {
    if (message.macAddress !== null && macAddress !== message.macAddress) {
      setMacAddress(message.macAddress);
    }

    if (
      message.payload === "smartknobState" &&
      message.smartknobState !== null
    ) {
      const state = PB.SmartKnobState.create(message.smartknobState);
      const stateObj = PB.SmartKnobState.toObject(state, {
        defaults: true,
      }) as NoUndefinedField<PB.ISmartKnobState>;
      setSmartKnobState(stateObj);
    }

    if (message.payload === "log" && message.log !== null) {
      // console.log('LOG from smartknob', message.log?.msg);
      const timestamp = Date.now();

      const log = {
        timestamp,
        isVerbose: message.log?.isVerbose || false,
        level: message.log?.level || PB.LogLevel.INFO,
        origin: message.log?.origin || "",
        msg: message.log?.msg || "",
      };
      setNewLogMessage(log);
    }
  };

  const toggleLogLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(parseInt(e.target.value) as PB.LogLevel);
    console.log(PB.LogLevel.DEBUG);
    if (e.target.checked) {
      setSelectedLogLevels([
        ...selectedLogLevels,
        parseInt(e.target.value) as PB.LogLevel,
      ]);
    } else {
      setSelectedLogLevels(
        selectedLogLevels.filter(
          (level) => level !== (parseInt(e.target.value) as PB.LogLevel),
        ),
      );
    }
  };

  const toggleVerboseLogging = () => {
    setVerboseLogging(!verboseLogging);
  };

  const toggleOriginLogging = () => {
    setOriginLogging(!originLogging);
  };

  useEffect(() => {
    logRef.current?.lastElementChild?.scrollIntoView();
  }, [log]);

  useEffect(() => {
    if (newLogMessage == null) return;
    setFullLog([...fullLog, newLogMessage]);

    if (selectedLogLevels.includes(newLogMessage.level)) {
      if (!verboseLogging && newLogMessage.isVerbose) return;
      setLog([...log, newLogMessage]);
    }
  }, [newLogMessage]);

  return (
    <>
      {smartKnob != null ? (
        <div className="flex flex-col items-center">
          <div>SmartKnob Connected - {macAddress}</div>
          <div className="flex w-full flex-col gap-4">
            {/* CONSOLE DEBUG INFO */}
            <h2>SmartKnob Log</h2>
            <div className="overflow-visible rounded-xl border-2 border-zinc-500 bg-zinc-900 p-4">
              <ol
                ref={logRef}
                className="scrollbar scrollbar flex h-96 flex-col overflow-y-auto"
              >
                {log.map((msg, index) => {
                  const date = new Date(msg.timestamp);
                  const hours = String(date.getHours()).padStart(2, "0");
                  const minutes = String(date.getMinutes()).padStart(2, "0");
                  const seconds = String(date.getSeconds()).padStart(2, "0");
                  const timeString = `${hours}:${minutes}:${seconds}`;

                  var logTypeClass = "";
                  var logLevelString = "";

                  switch (msg.level) {
                    case PB.LogLevel.INFO:
                      logTypeClass = "!border-blue-800 !bg-blue-200";
                      logLevelString = "INFO";
                      break;
                    case PB.LogLevel.DEBUG:
                      logTypeClass = "!border-green-800 !bg-green-200";
                      logLevelString = "DEBUG";
                      break;
                    case PB.LogLevel.WARNING:
                      logTypeClass = "!border-orange-600 !bg-yellow-200";
                      logLevelString = "WARNING";
                      break;
                    case PB.LogLevel.ERROR:
                      logTypeClass = "!border-rose-800 !bg-red-200";
                      logLevelString = "ERROR";
                      break;

                    default:
                      logTypeClass = "!border-blue-800 !bg-blue-200";
                      logLevelString = "UNKNOWN";
                      break;
                  }

                  return (
                    <li
                      key={index}
                      className="flex items-center text-nowrap p-1"
                    >
                      <div className="text-blue-300">{timeString}</div>
                      <div
                        title={logLevelString}
                        className={`ml-2 mr-3 inline-block overflow-hidden text-ellipsis text-nowrap rounded-r-md border-l-[3px] bg-zinc-400 p-1 text-sm text-black ${logTypeClass}`}
                      >
                        {!originLogging ? logLevelString : msg.origin}
                        {msg.isVerbose ? " (" : ""}
                        <span className="text-orange-500">
                          {msg.isVerbose ? "V" : ""}
                        </span>
                        {msg.isVerbose ? ")" : ""}
                      </div>
                      <div className="overflow-hidden text-ellipsis text-nowrap">
                        {msg.msg}
                      </div>
                    </li>
                  );
                }, [])}
              </ol>
              <div className="mt-4 flex h-14 w-full items-center justify-between rounded-md bg-zinc-400 p-[5px]">
                <div className="flex gap-2">
                  <div className="multi-select">
                    <button className="btn multi-select-btn">
                      Select Log Levels <IconChevronDown />
                    </button>
                    <div className="multi-select-dropdown">
                      <label className="flex justify-between">
                        INFO{" "}
                        <input
                          type="checkbox"
                          value={PB.LogLevel.INFO}
                          checked={selectedLogLevels.includes(PB.LogLevel.INFO)}
                          onChange={(e) => toggleLogLevel(e)}
                        />
                      </label>
                      <label>
                        DEBUG{" "}
                        <input
                          type="checkbox"
                          value={PB.LogLevel.DEBUG}
                          checked={selectedLogLevels.includes(
                            PB.LogLevel.DEBUG,
                          )}
                          onChange={(e) => toggleLogLevel(e)}
                        />
                      </label>
                      <label>
                        WARNING{" "}
                        <input
                          type="checkbox"
                          value={PB.LogLevel.WARNING}
                          checked={selectedLogLevels.includes(
                            PB.LogLevel.WARNING,
                          )}
                          onChange={(e) => toggleLogLevel(e)}
                        />
                      </label>
                      <label>
                        ERROR{" "}
                        <input
                          type="checkbox"
                          value={PB.LogLevel.ERROR}
                          checked={selectedLogLevels.includes(
                            PB.LogLevel.ERROR,
                          )}
                          onChange={(e) => toggleLogLevel(e)}
                        />
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn !bg-orange-800"
                    onClick={toggleVerboseLogging}
                  >
                    TOGGLE VERBOSE
                  </button>
                  <button
                    className="btn !bg-slate-600"
                    onClick={toggleOriginLogging}
                  >
                    TOGGLE ORIGIN
                  </button>
                </div>
                <div>
                  <button className="btn !bg-emerald-800">DOWNLOAD LOG</button>
                </div>
              </div>
            </div>
          </div>
          <div className="m-4 flex gap-2">
            <button
              className="btn"
              onClick={() => {
                smartKnob.sendCommand(PB.SmartKnobCommand.MOTOR_CALIBRATE);
              }}
            >
              Motor Calibration
            </button>
            <button
              className="btn"
              onClick={() => {
                smartKnob.sendCommand(PB.SmartKnobCommand.STRAIN_CALIBRATE);
              }}
            >
              Strain Calibration
            </button>
          </div>
        </div>
      ) : navigator.serial ? (
        <div className="flex flex-col items-center">
          <button className="btn" onClick={connectToSerial}>
            Connect via Web Serial
          </button>
        </div>
      ) : (
        "Web Serial API is not supported in this browser."
      )}
    </>
  );
}

export default App;
