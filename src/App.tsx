import { useEffect, useState } from "react";
import "./App.scss";
import { PB } from "./proto/dist/protos";
import { SmartKnobWebSerial } from "./webserial";
import { IconMoon, IconSun } from "@tabler/icons-react";
import seedlabsLogo from "./assets/logoFull_white_transparent.webp";
import DashItem from "./components/DashItem";
import LogDashItem from "./components/LogDashItem";
import StrainCalib from "./components/StrainCalibration/StrainCalib";
import { SmartKnobLog } from "./types";
import { useSmartKnobStore } from "./stores/smartKnobStore";
import { useStore } from "zustand";

function App() {
  const { knob, serial, state, log, fullLog } = useSmartKnobStore();

  const [darkMode, setDarkMode] = useState(false);

  // const [smartKnob, setSmartKnob] = useState<SmartKnobWebSerial | undefined>(
  //   undefined,
  // );
  // const [knob, setKnob] = useState<PB.Knob | undefined>(undefined);
  const [connectionState, setConnectionState] = useState(false);
  const [calibrationWeight, setCalibrationWeight] = useState<number>(272);
  const [strainCalibState, setStrainCalibState] = useState<
    PB.StrainCalibState | undefined
  >(undefined);
  const [newLogMessage, setNewLogMessage] = useState<SmartKnobLog>();
  // const [log, setLog] = useState<Array<SmartKnobLog>>([]);

  // const [fullLog, setFullLog] = useState<Array<SmartKnobLog>>([]);

  const connectToSmartKnob = async (serialPort: SerialPort) => {
    try {
      // var smartKnob = null;
      const smartKnob_ = new SmartKnobWebSerial(serialPort, onMessage);
      // setSmartKnob(smartKnob_);
      useSmartKnobStore.setState({ serial: smartKnob_ });
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
          alert("Device disconnected");
        });
        connectToSmartKnob(serialPort);
      } else {
        console.error("Web Serial API is not supported in this browser.");
        // setSmartKnob(undefined);
        useSmartKnobStore.setState({ serial: undefined });
        setConnectionState(false);
      }
    } catch (error) {
      console.error("Error with serial port:", error);
      setConnectionState(false);
    }
  };

  const onMessage = (message: PB.FromSmartKnob) => {
    if (message.payload != "log" && message.payload != "smartknobState")
      console.log(message);

    if (message.payload === "knob" && message.knob !== null) {
      const knob_ = PB.Knob.create(message.knob);
      useSmartKnobStore.setState({ knob: knob_ });
      setConnectionState(true);
    }

    if (
      message.payload === "strainCalibState" &&
      message.strainCalibState !== null
    ) {
      const state = PB.StrainCalibState.create(message.strainCalibState);
      console.log(state);

      setStrainCalibState(state);
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", (!darkMode).toString());
    document.body.classList.toggle("dark");
  };

  const strainCalibStep = () => {
    if (strainCalibState === undefined)
      return <p>Press to start strain calibration.</p>;

    switch (strainCalibState.step) {
      case 1:
        return <p>Press when calibration weight is placed ontop of knob.</p>;
      case 2:
        return <p>Press at desired calibrated "pressure".</p>;
      default:
        return <p>Press to start calibration.</p>;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (newLogMessage == null) return;
    useSmartKnobStore.setState({ fullLog: [...fullLog, newLogMessage] });

    const storedLogLevels = new Set<PB.LogLevel>(
      JSON.parse(localStorage.getItem("logLevels")!),
    );

    const verboseLogging = localStorage.getItem("verboseLogging") === "true";

    if (storedLogLevels.has(newLogMessage.level)) {
      if (!verboseLogging && newLogMessage.isVerbose) return;
      useSmartKnobStore.setState({ log: [...log, newLogMessage] });
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
        {navigator.serial ? (
          <button
            className="connect-btn"
            onClick={connectToSerial}
            disabled={connectionState}
          >
            {connectionState ? <>{knob?.macAddress}</> : <>CONNECT</>}
          </button>
        ) : null}
        {navigator.serial ? (
          <div
            id="skdk-inner-container"
            className={`${connectionState ? "" : "disabled"}`}
          >
            <LogDashItem log={log} fullLog={fullLog} />
            <DashItem
              title="MOTOR CALIBRATION"
              index={2}
              status={
                knob?.persistentConfig?.motor?.calibrated
                  ? "CALIBRATED"
                  : "NOT CALIBRATED"
              }
            >
              <button
                className="btn"
                onClick={() =>
                  serial?.sendCommand(PB.SmartKnobCommand.MOTOR_CALIBRATE)
                }
              >
                Press to start motor calibration.
              </button>
            </DashItem>
            <StrainCalib />
          </div>
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
