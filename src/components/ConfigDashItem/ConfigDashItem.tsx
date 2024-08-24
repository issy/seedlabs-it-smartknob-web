import { useState } from "react";
import DashItem from "../DashItem";
import "./ConfigDashItem.scss";
import { SETTINGS } from "../../proto/dist/protos";
import { useSmartKnobStore } from "../../stores/smartKnobStore";

interface ConfigDashItemProps {
  index: number;
}

const ConfigDashItem: React.FC<ConfigDashItemProps> = ({ index }) => {
  const { knob, serial, settings } = useSmartKnobStore();

  console.log("settings", settings);

  return (
    <DashItem
      title="CONFIG"
      index={index}
      className="active"

      // status={
      //   knob?.persistentConfig?.motor?.calibrated
      //     ? "CALIBRATED"
      //     : "NOT CALIBRATED"
      // }
    >
      <div className="m-3 flex gap-6">
        <div className="flex flex-col gap-3">
          <h3>Screen Dimming</h3>
          <input
            type="checkbox"
            className="toggle"
            checked={settings.screen.dim}
            onChange={(e) => {
              settings.screen.dim = e.target.checked;
              useSmartKnobStore.setState({});
            }}
          />
          <input
            type="number"
            min={0}
            max={6000}
            value={settings.screen.timeout}
            placeholder="Timeout"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              settings.screen.timeout = parseInt(e.target.value);
              useSmartKnobStore.setState({});
            }}
          />
          <input
            type="range"
            min={0}
            max={100}
            value={settings.screen.maxBright}
            className="range"
            onChange={(e) => {
              if (parseInt(e.target.value) >= settings.screen.minBright) {
                settings.screen.maxBright = parseInt(e.target.value);
              }
              useSmartKnobStore.setState({});
            }}
          />
          <input
            type="range"
            min={0}
            max={100}
            value={settings.screen.minBright}
            onChange={(e) => {
              if (parseInt(e.target.value) <= settings.screen.maxBright) {
                settings.screen.minBright = parseInt(e.target.value);
              }
              useSmartKnobStore.setState({});
            }}
            className="range"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h3>Led Ring</h3>
          <input
            type="checkbox"
            className="toggle"
            checked={settings.ledRing.dim}
            onChange={(e) => {
              settings.ledRing.dim = e.target.checked;
              useSmartKnobStore.setState({});
            }}
          />
          <input type="color" />
        </div>
        <div className="flex flex-col gap-3">
          <h3>Beacon</h3>
          <input
            type="checkbox"
            className="toggle"
            checked={settings.ledRing.beacon.enabled}
            onChange={(e) => {
              settings.ledRing.beacon.enabled = e.target.checked;
              useSmartKnobStore.setState({});
            }}
          />
          <input type="color" />
        </div>
      </div>

      {/* <input type="color" /> */}
      <button
        className="btn mx-3 mb-3"
        onClick={() =>
          serial?.sendSettings(
            SETTINGS.Settings.create({
              screen: {
                ...settings.screen,
                maxBright: settings.screen.maxBright * (65535 / 100),
              },
            }),
          )
        }
      >
        SAVE
      </button>
    </DashItem>
  );
};

export default ConfigDashItem;
