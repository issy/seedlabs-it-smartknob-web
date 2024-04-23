import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { PB } from "./proto/dist/protos";
import { SmartKnobWebSerial } from "./webserial";
import { exhaustiveCheck, findNClosest, lerp, NoUndefinedField } from "./util";
import {
  IconChevronCompactDown,
  IconChevronDown,
  IconChevronUp,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { MessageCallback } from "./webserial/core";
import seedlabsLogo from "./assets/logoFull_white_transparent.webp";

interface SmartKnobLog {
  timestamp: number;
  isVerbose: boolean;
  level: PB.LogLevel;
  origin: string;
  msg: string;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [macAddress, setMacAddress] = useState<string | null>(null);
  const [smartKnob, setSmartKnob] = useState<SmartKnobWebSerial | null>(null);
  const [connectionState, setConnectionState] = useState(false);
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
  const [selectedLogLevels, setSelectedLogLevels] = useState<Set<PB.LogLevel>>(
    new Set([PB.LogLevel.INFO, PB.LogLevel.WARNING, PB.LogLevel.ERROR]),
  );

  const [fullLog, setFullLog] = useState<Array<SmartKnobLog>>([]);
  const [verboseLogging, setVerboseLogging] = useState(false);
  const [originLogging, setOriginLogging] = useState(true);
  const logRef = useRef<HTMLOListElement>(null);

  const connectToSmartKnob = async (serialPort: SerialPort) => {
    try {
      // var smartKnob = null;
      const smartKnob_ = new SmartKnobWebSerial(serialPort, onMessage);
      setSmartKnob(smartKnob_);
      if (smartKnob_ !== null) {
        await smartKnob_.openAndLoop();
      }
    } catch (error) {
      console.error("Error with serial port:", error);
      setConnectionState(false);
    }
  };

  const connectToSerial = async () => {
    try {
      if (navigator.serial) {
        var serialPort = await navigator.serial.requestPort({
          filters: SmartKnobWebSerial.USB_DEVICE_FILTERS,
        });
        serialPort.addEventListener("disconnect", async () => {
          setConnectionState(false);
          console.log("Device disconnected");
        });
        connectToSmartKnob(serialPort);
      } else {
        console.error("Web Serial API is not supported in this browser.");
        setSmartKnob(null);
        setConnectionState(false);
      }
    } catch (error) {
      console.error("Error with serial port:", error);
      setConnectionState(false);
    }
  };

  const onMessage = (message: PB.FromSmartKnob) => {
    if (message.payload === "knob" && message.knob !== null) {
      const knob = PB.Knob.create(message.knob);
      setMacAddress(knob.macAddress);
      setConnectionState(true);
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

  const toggleLogLevel = (logLevel: PB.LogLevel) => {
    if (selectedLogLevels.has(logLevel)) {
      selectedLogLevels.delete(logLevel);
    } else setSelectedLogLevels(selectedLogLevels.add(logLevel));
    localStorage.setItem(
      "logLevels",
      JSON.stringify(Array.from(selectedLogLevels)),
    );
    setSelectedLogLevels(new Set([...selectedLogLevels]));
  };

  const toggleVerboseLogging = () => {
    setVerboseLogging(!verboseLogging);
  };

  const toggleOriginLogging = () => {
    setOriginLogging(!originLogging);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", (!darkMode).toString());
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }

    if (localStorage.getItem("logLevels") !== null) {
      const storedLogLevels = new Set<PB.LogLevel>(
        JSON.parse(localStorage.getItem("logLevels")!),
      );
      setSelectedLogLevels(storedLogLevels);
    }
  }, []);

  useEffect(() => {
    logRef.current?.lastElementChild?.scrollIntoView();
  }, [log]);

  useEffect(() => {
    if (newLogMessage == null) return;
    setFullLog([...fullLog, newLogMessage]);

    if (selectedLogLevels.has(newLogMessage.level)) {
      if (!verboseLogging && newLogMessage.isVerbose) return;
      setLog([...log, newLogMessage]);
    }
  }, [newLogMessage]);

  return (
    <>
      <div className="skdk-container">
        <button className="color-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <IconSun size={24} /> : <IconMoon size={24} />}
        </button>
        <div className="page-title">
          <h1>SMARTKNOB DEV KIT</h1>
          <h3>Configuration and Debugging console</h3>
        </div>
        {/* {navigator.serial ? ( */}
        {true ? (
          <>
            <button
              className="connect-btn"
              onClick={connectToSerial}
              disabled={connectionState}
            >
              {connectionState ? <>{macAddress}</> : <>CONNECT</>}
            </button>
            <div className="item-container log">
              <header>
                <div>
                  {" "}
                  <h3>[1]</h3>
                  <h1>LOGS</h1>
                </div>
                <span className="mr-4 -rotate-90">&lt;</span>
              </header>
              <div className="log-container">
                <div className="log-header">
                  <div className="log-levels">
                    <button
                      className={
                        selectedLogLevels.has(PB.LogLevel.INFO) ? "active" : ""
                      }
                      onClick={() => toggleLogLevel(PB.LogLevel.INFO)}
                    >
                      <div className="log-color-indicator  bg-log-info"></div>
                      INFO
                    </button>
                    <button
                      className={
                        selectedLogLevels.has(PB.LogLevel.DEBUG) ? "active" : ""
                      }
                      onClick={() => toggleLogLevel(PB.LogLevel.DEBUG)}
                    >
                      <div className="log-color-indicator bg-log-debug"></div>
                      DEBUG
                    </button>
                    <button
                      className={
                        selectedLogLevels.has(PB.LogLevel.WARNING)
                          ? "active"
                          : ""
                      }
                      onClick={() => toggleLogLevel(PB.LogLevel.WARNING)}
                    >
                      <div className="log-color-indicator bg-log-warning"></div>
                      WARNING
                    </button>
                    <button
                      className={
                        selectedLogLevels.has(PB.LogLevel.ERROR) ? "active" : ""
                      }
                      onClick={() => toggleLogLevel(PB.LogLevel.ERROR)}
                    >
                      <div className="log-color-indicator bg-log-error"></div>
                      ERROR
                    </button>
                  </div>
                  <div className="log-toggles">
                    <button
                      className={verboseLogging ? "active" : ""}
                      onClick={toggleVerboseLogging}
                    >
                      TOGGLE VERBOSE
                    </button>
                    <button
                      className={originLogging ? "active" : ""}
                      onClick={toggleOriginLogging}
                    >
                      TOGGLE ORIGIN
                    </button>
                  </div>
                </div>
                <div className="log-console">
                  <ol ref={logRef}>
                    {log.map((msg, index) => {
                      if (log.length > 100) {
                        // Only display last 100 array items
                        log.shift();
                      }
                      const date = new Date(msg.timestamp);
                      const hours = String(date.getHours()).padStart(2, "0");
                      const minutes = String(date.getMinutes()).padStart(
                        2,
                        "0",
                      );
                      const seconds = String(date.getSeconds()).padStart(
                        2,
                        "0",
                      );
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

                      if (msg.origin.length > 40) {
                        msg.origin = `...${msg.origin.slice(
                          msg.origin.lastIndexOf("/", 40),
                        )}`;
                      }

                      return (
                        <li key={index}>
                          <div>
                            <div
                              className={`log-color-indicator  bg-log-${logLevelString.toLowerCase()}`}
                            ></div>
                            <p className="log-console-time">{timeString}</p>
                            <p className="log-console-msg">{msg.msg}</p>
                          </div>
                          {originLogging && msg.origin && (
                            <p className="log-console-origin">{msg.origin}</p>
                          )}
                        </li>
                      );
                    }, [])}
                  </ol>
                </div>
                <div className="mb-3 mr-3 flex justify-end">
                  <button className="btn">DOWNLOAD</button>
                </div>
              </div>
            </div>
            <div className="item-container">
              <header>
                <div>
                  <h3>[2]</h3>
                  <h1>MOTOR CALIBRATION</h1>
                </div>
                <span>-</span>
              </header>
            </div>
            <div className="item-container">
              <header>
                <div>
                  <h3>[3]</h3>
                  <h1>STRAIN CALIBRATION</h1>
                </div>
                <span>-</span>
              </header>
            </div>
          </>
        ) : (
          "Web Serial API is not supported in this browser."
        )}
        <div className="flex-grow content-end">
          <img
            src={seedlabsLogo}
            className="flex h-full w-60  flex-col"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
