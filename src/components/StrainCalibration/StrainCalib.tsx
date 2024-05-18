import React, { PropsWithChildren } from "react";
import dontTouchImage from "../../assets/DontTouchKnob.png";
import placeWeightImage from "../../assets/PlaceWeight.png";
import removeWeightImage from "../../assets/RemoveWeight.png";
import doneImage from "../../assets/Done.png";
import DashItem from "../DashItem";
import { useSmartKnobStore } from "../../stores/smartKnobStore";
import { PB } from "../../proto/dist/protos";
import StrainCalibItem from "./StrainCalibItem";

interface StrainCalibProps extends PropsWithChildren {}

const StrainCalib: React.FC<StrainCalibProps> = ({}) => {
  const { knob, serial, log } = useSmartKnobStore();
  const nextStepCallback = () => {
    if (knob?.persistentConfig?.motor?.calibrated === false) {
      alert("Motor not calibrated! Please calibrate motor first.");
      return;
    }
    serial?.sendStrainCalibration(
      PB.StrainCalibration.create({
        calibrationWeight: 272,
      }),
    );
  };
  return (
    <DashItem
      title="STRAIN CALIBRATION"
      index={3}
      status={
        knob?.persistentConfig?.strainScale != 1.0 &&
        knob?.persistentConfig?.strainScale != 0 &&
        knob?.persistentConfig?.strainScale != null
          ? "CALIBRATED"
          : "NOT CALIBRATED"
      }
    >
      {/* <label>Calibration Weight</label>
              <input
                type="number"
                value={calibrationWeight}
                onChange={(e) =>
                  setCalibrationWeight(parseFloat(e.target.value))
                }
                title="Calibration weight in grams. Default is 272g."
                className="focus:ring-skdk-500 w-full rounded-md border border-skdk bg-primary p-2 text-black shadow-sm focus:border-transparent focus:outline-none focus:ring-2 sm:text-sm"
              /> */}
      <div className="flex gap-6">
        <StrainCalibItem
          nextStepCallback={nextStepCallback}
          image={dontTouchImage}
          step={1}
          stepHTML={
            <p>
              DONT TOUCH <br /> THE KNOB
            </p>
          }
          stepBtnText="START"
          active={
            !log
              .map((log) => log.msg)
              .includes("Factory strain calibration step 2")
          }
        />
        <StrainCalibItem
          nextStepCallback={nextStepCallback}
          image={placeWeightImage}
          step={2}
          stepHTML={
            <p>
              PLACE 250ml CAN <br /> ON TOP OF YOUR KNOB
            </p>
          }
          stepBtnText="NEXT"
          active={false}
        />
        <StrainCalibItem
          nextStepCallback={nextStepCallback}
          image={removeWeightImage}
          step={3}
          stepHTML={
            <p>
              REMOVE THE WEIGHT <br /> &#8205;
            </p>
          }
          stepBtnText="NEXT"
          active={false}
          // active={?.step === 3}
        />
        <StrainCalibItem
          nextStepCallback={nextStepCallback}
          image={doneImage}
          step={4}
          stepHTML={
            <p>
              YOU ARE ALL SET <br /> &#8205;
            </p>
          }
          stepBtnText="DONE"
          active={false}
        />
      </div>
    </DashItem>
  );
};

export default StrainCalib;
