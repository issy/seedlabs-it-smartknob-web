import DashItem from "../DashItem";
import "./ConfigDashItem.scss";
import { SETTINGS } from "../../proto/dist/protos";
import { useSmartKnobStore } from "../../stores/smartKnobStore";

interface ConfigDashItemProps {
  index: number;
}

const ConfigDashItem: React.FC<ConfigDashItemProps> = ({ index }) => {
  const { knob, serial, settings } = useSmartKnobStore();

  // console.log("settings", settings);

  return (
    <DashItem
      title="CONFIGURE DEVICE"
      index={index}
      status={
        knob?.macAddress !== "" && knob?.settings === null // TODO: add better check in the future, check firm version and or protbuf protocol version
          ? "FIRMWARE VERSION NOT SUPPORTED"
          : ""
      }
      className={`${knob?.macAddress !== "" && knob?.settings === null ? "pointer-events-none touch-none opacity-40" : ""}`} //! TODO REMOVE ACTIVE CLASS ONLY FOR TESTING
    >
      <div className="$  m-3 flex gap-6">
        <div className="flex flex-grow flex-col gap-3">
          <h3>Screen Dimming</h3>
          <label className="label form-control cursor-pointer">
            <span className="label-text">Enable/Disable</span>
            <input
              type="checkbox"
              className="toggle"
              checked={settings.screen.dim}
              onChange={(e) => {
                settings.screen.dim = e.target.checked;
                useSmartKnobStore.setState({});
              }}
            />
          </label>

          <label className="label form-control cursor-pointer">
            <span className="label-text">Timeout</span>
            <input
              type="number"
              min={0}
              max={6000}
              value={settings.screen.timeout}
              placeholder="Timeout"
              className="input input-bordered w-8/12 max-w-xs"
              onChange={(e) => {
                settings.screen.timeout = parseInt(e.target.value);
                useSmartKnobStore.setState({});
              }}
            />
          </label>
          <label className="label form-control cursor-pointer">
            <span className="label-text">Max Brightness</span>
            <input
              type="range"
              min={0}
              max={100}
              value={settings.screen.maxBright}
              className="range w-8/12"
              onChange={(e) => {
                if (parseInt(e.target.value) >= settings.screen.minBright) {
                  settings.screen.maxBright = parseInt(e.target.value);
                }
                useSmartKnobStore.setState({});
              }}
            />
          </label>
          <label className="label form-control cursor-pointer">
            <span className="label-text">Min Brightness</span>
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
              className="range w-8/12"
            />
          </label>
        </div>
        <div className="flex flex-grow flex-col gap-3">
          <h3>Led Ring</h3>
          <label className="label form-control cursor-pointer">
            <span className="label-text">Enable/Disable</span>
            <input
              type="checkbox"
              className="toggle"
              checked={settings.ledRing.enabled}
              onChange={(e) => {
                settings.ledRing.enabled = e.target.checked;
                useSmartKnobStore.setState({});
              }}
            />
          </label>
          <label className="label form-control cursor-pointer">
            <span className="label-text">Dim</span>
            <input
              type="checkbox"
              className="toggle"
              checked={settings.ledRing.dim}
              onChange={(e) => {
                settings.ledRing.dim = e.target.checked;
                useSmartKnobStore.setState({});
              }}
            />
          </label>

          <label className="label form-control cursor-pointer">
            <span className="label-text">Max Brightness</span>
            <input
              type="range"
              min={0}
              max={100}
              value={settings.ledRing.maxBright}
              className="range w-8/12"
              onChange={(e) => {
                if (parseInt(e.target.value) >= settings.ledRing.minBright) {
                  settings.ledRing.maxBright = parseInt(e.target.value);
                }
                useSmartKnobStore.setState({});
              }}
            />
          </label>
          <label className="label form-control cursor-pointer">
            <span className="label-text">Min Brightness</span>
            <input
              type="range"
              min={0}
              max={100}
              value={settings.ledRing.minBright}
              onChange={(e) => {
                if (parseInt(e.target.value) <= settings.ledRing.maxBright) {
                  settings.ledRing.minBright = parseInt(e.target.value);
                }
                useSmartKnobStore.setState({});
              }}
              className="range w-8/12"
            />
          </label>

          <label className="label form-control cursor-pointer">
            <span className="label-text">Color</span>
            <input
              type="color"
              value={settings.ledRing.color}
              onChange={(e) => {
                settings.ledRing.color = e.target.value;
                useSmartKnobStore.setState({});
              }}
            />
          </label>
        </div>
        <div className="flex flex-grow flex-col gap-3">
          <h3>Beacon</h3>
          <label className="label form-control cursor-pointer">
            <span className="label-text">Enable/Disable</span>
            <input
              type="checkbox"
              className="toggle"
              checked={settings.ledRing.beacon.enabled}
              onChange={(e) => {
                settings.ledRing.beacon.enabled = e.target.checked;
                useSmartKnobStore.setState({});
              }}
            />
          </label>
          <label className="label form-control cursor-pointer">
            <span className="label-text">Brightness</span>
            <input
              type="range"
              min={0}
              max={100}
              value={settings.ledRing.beacon.brightness}
              className="range w-8/12"
              onChange={(e) => {
                settings.ledRing.beacon.brightness = parseInt(e.target.value);
                useSmartKnobStore.setState({});
              }}
            />
          </label>
          <label className="label form-control cursor-pointer">
            <span className="label-text">Color</span>
            <input
              type="color"
              value={settings.ledRing.beacon.color}
              onChange={(e) => {
                console.log();

                settings.ledRing.beacon.color = e.target.value;
                useSmartKnobStore.setState({});
              }}
            />
          </label>
        </div>
      </div>

      <button
        className="btn mx-3 mb-3"
        onClick={() =>
          serial?.sendSettings(
            SETTINGS.Settings.create({
              screen: {
                ...settings.screen,
                timeout: settings.screen.timeout * 1000,
                maxBright: settings.screen.maxBright * (65535 / 100),
                minBright: settings.screen.minBright * (65535 / 100),
              },
              ledRing: {
                ...settings.ledRing,
                maxBright: settings.ledRing.maxBright * (65535 / 100),
                minBright: settings.ledRing.minBright * (65535 / 100),
                color: parseInt(settings.ledRing.color.slice(1), 16),
                beacon: {
                  ...settings.ledRing.beacon,
                  brightness: settings.ledRing.beacon.brightness * (255 / 100),
                  color: parseInt(settings.ledRing.beacon.color.slice(1), 16),
                },
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
