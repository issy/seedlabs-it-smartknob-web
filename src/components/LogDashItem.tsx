import { useEffect, useRef, useState } from "react";
import DashItem from "./DashItem";
import { PB } from "../proto/dist/protos";
import "./LogDashItem.scss";
import { SmartKnobLog } from "../types";
import { useSmartKnobStore } from "../stores/smartKnobStore";

interface LogDashItemProps {}

const LogDashItem: React.FC<LogDashItemProps> = () => {
  const { log, fullLog } = useSmartKnobStore();

  const [selectedLogLevels, setSelectedLogLevels] = useState<Set<PB.LogLevel>>(
    new Set([PB.LogLevel.INFO, PB.LogLevel.WARNING, PB.LogLevel.ERROR]),
  );
  const [verboseLogging, setVerboseLogging] = useState(false);
  const [originLogging, setOriginLogging] = useState(false);

  const [logInFocus, setLogInFocus] = useState<boolean>(false);
  const consoleRef = useRef<HTMLOListElement>(null);

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
    localStorage.setItem("verboseLogging", verboseLogging.toString());
  };

  const toggleOriginLogging = () => {
    setOriginLogging(!originLogging);
  };

  useEffect(() => {
    if (localStorage.getItem("logLevels") !== null) {
      const storedLogLevels = new Set<PB.LogLevel>(
        JSON.parse(localStorage.getItem("logLevels")!),
      );
      setSelectedLogLevels(storedLogLevels);
    }
  }, []);

  useEffect(() => {
    if (consoleRef.current === null) return;
    // console.log(consoleRef.current.scrollHeight);
    // console.log(consoleRef.current.scrollTop + consoleRef.current.clientHeight);

    if (logInFocus)
      if (
        consoleRef.current.scrollHeight - 100 <=
        consoleRef.current.scrollTop + consoleRef.current.clientHeight
      )
        consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
  }, [log]);

  return (
    <DashItem title="LOGS" index={1} saveState={true}>
      <div className="log-header">
        <div className="log-levels">
          <button
            className={selectedLogLevels.has(PB.LogLevel.INFO) ? "active" : ""}
            onClick={() => toggleLogLevel(PB.LogLevel.INFO)}
          >
            <div className="log-color-indicator  bg-log-info"></div>
            INFO
          </button>
          <button
            className={selectedLogLevels.has(PB.LogLevel.DEBUG) ? "active" : ""}
            onClick={() => toggleLogLevel(PB.LogLevel.DEBUG)}
          >
            <div className="log-color-indicator bg-log-debug"></div>
            DEBUG
          </button>
          <button
            className={
              selectedLogLevels.has(PB.LogLevel.WARNING) ? "active" : ""
            }
            onClick={() => toggleLogLevel(PB.LogLevel.WARNING)}
          >
            <div className="log-color-indicator bg-log-warning"></div>
            WARNING
          </button>
          <button
            className={selectedLogLevels.has(PB.LogLevel.ERROR) ? "active" : ""}
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
        <ol
          ref={consoleRef}
          onMouseEnter={() => {
            setLogInFocus(true);
          }}
          onMouseLeave={() => {
            setLogInFocus(false);
          }}
        >
          {log.map((msg, index) => {
            if (log.length > 100) {
              // Only display last 100 array items
              log.shift();
            }
            const date = new Date(msg.timestamp);
            const hours = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");
            const seconds = String(date.getSeconds()).padStart(2, "0");
            const timeString = `${hours}:${minutes}:${seconds}`;

            var logLevelString = getLogLevelString(msg.level);

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
        <button
          className="btn"
          onClick={() => {
            const element = document.createElement("a");
            const formattedLog = fullLog.map((msg) => {
              const date = new Date(msg.timestamp);
              const hours = String(date.getHours()).padStart(2, "0");
              const minutes = String(date.getMinutes()).padStart(2, "0");
              const seconds = String(date.getSeconds()).padStart(2, "0");
              const timeString = `${hours}:${minutes}:${seconds}`;
              let logString = `${timeString} [${getLogLevelString(msg.level)}] ${msg.msg}`;
              if (msg.origin && originLogging) {
                if (msg.origin.length > 40) {
                  msg.origin = `...${msg.origin.slice(
                    msg.origin.lastIndexOf("/", 40),
                  )}`;
                }
                logString += ` [${msg.origin}]`;
              }
              return logString;
            });
            const file = new Blob([formattedLog.join("\n")], {
              type: "text/plain",
            });
            element.href = URL.createObjectURL(file);
            element.download = "log.txt";
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          }}
        >
          DOWNLOAD
        </button>
      </div>
    </DashItem>
  );
};

const getLogLevelString = (logLevel: PB.LogLevel) => {
  switch (logLevel) {
    case PB.LogLevel.INFO:
      return "INFO";
    case PB.LogLevel.DEBUG:
      return "DEBUG";
    case PB.LogLevel.WARNING:
      return "WARNING";
    case PB.LogLevel.ERROR:
      return "ERROR";
    default:
      return "INFO";
  }
};

export default LogDashItem;
