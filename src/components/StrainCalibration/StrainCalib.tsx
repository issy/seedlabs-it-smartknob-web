import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
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
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [run, setRun] = useState<number>(1);
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

  // const stepRefs = [
  //   React.createRef<HTMLDivElement>(),
  //   React.createRef<HTMLDivElement>(),
  //   React.createRef<HTMLDivElement>(),
  //   React.createRef<HTMLDivElement>(),
  // ];

  const checkIncludes = (str: string, count: number = 1) => {
    return (
      log.map((log) => log.msg.includes(str)).filter((includes) => includes)
        .length === count
    );
  };

  useEffect(() => {
    if (
      checkIncludes(
        "Place calibration weight on the knob and press 'Y' again",
        run,
      ) &&
      currentStep === 0
    ) {
      setCurrentStep(1);
    } else if (
      checkIncludes("Remove calibration weight.", run) &&
      currentStep === 1
    ) {
      setCurrentStep(2);
    } else if (
      checkIncludes("Factory strain calibration complete!", run) &&
      currentStep === 2
    ) {
      setRun((prev) => prev + 1);
      setCurrentStep(3);
      setTimeout(() => {
        setCurrentStep(0);
      }, 5000);
    }

    if (
      (checkIncludes("Restart calibration by pressing 'Y' again.", run) ||
        checkIncludes(
          "Calibration weight not detected. Please place the calibration weight on the knob and press 'Y' again",
        )) &&
      currentStep != 0
    ) {
      console.log("Restarting calibration");

      setRun((prev) => prev + 1);
      setCurrentStep(0);
    }
  }, [log]);

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
      className="overflow-visible"
    >
      <div className="hide-scrollbar flex gap-6 overflow-x-scroll p-3">
        <StrainCalibItem
          nextStepCallback={nextStepCallback}
          image={dontTouchImage}
          step={1}
          stepHTML={
            <p>
              DONT TOUCH <br /> THE KNOB
            </p>
          }
          stepBtnText="TARE"
          active={currentStep === 0}
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
          stepBtnText="CALIBRATE"
          active={currentStep === 1}
        />
        <StrainCalibItem
          image={removeWeightImage}
          step={3}
          stepHTML={
            <p>
              REMOVE THE WEIGHT <br /> &#8205;
            </p>
          }
          automatic={true}
          automaticDuration={5}
          active={currentStep === 2}
        />
        <StrainCalibItem
          nextStepCallback={() => setCurrentStep(0)}
          image={doneImage}
          step={4}
          stepHTML={
            <p>
              YOU ARE ALL SET <br /> &#8205;
            </p>
          }
          stepBtnText="DONE"
          active={currentStep === 3}
        />
      </div>
    </DashItem>
  );
};

export default StrainCalib;

// {
//   /* <label>Calibration Weight</label>
//               <input
//                 type="number"
//                 value={calibrationWeight}
//                 onChange={(e) =>
//                   setCalibrationWeight(parseFloat(e.target.value))
//                 }
//                 title="Calibration weight in grams. Default is 272g."
//                 className="focus:ring-skdk-500 w-full rounded-md border border-skdk bg-primary p-2 text-black shadow-sm focus:border-transparent focus:outline-none focus:ring-2 sm:text-sm"
//               /> */
// }
