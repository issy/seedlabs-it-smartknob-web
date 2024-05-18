import React, { PropsWithChildren } from "react";

interface StrainCalibItemProps extends PropsWithChildren {
  image: string;
  step: number;
  stepHTML: React.ReactNode;
  stepBtnText: string;
  active: boolean;
  nextStepCallback: () => void;
}

const StrainCalibItem: React.FC<StrainCalibItemProps> = ({
  image,
  step,
  stepHTML,
  stepBtnText,
  active,
  nextStepCallback,
}) => {
  // Implement your component logic here

  return (
    <div className="flex w-fit flex-shrink-0 select-none flex-col gap-4">
      <div
        className={`relative z-0 inline-block overflow-hidden border-2 border-slate-700 px-20 py-2 ${active && "bg-secondary"}`}
      >
        <p
          className="font-82XC absolute left-0 top-0 -z-10 p-2 text-[420px] leading-[0.9]"
          style={{ color: "#C1C6C4" }}
        >
          {step}
        </p>
        <img src={image} alt="" className="select-none" />
        <div className="font-44ND pb-2 pt-4 text-center text-3xl leading-6 text-black">
          {stepHTML}
        </div>
      </div>
      <button
        className={`btn ${!active && "btn-disabled pointer-events-none"}`}
        onClick={nextStepCallback}
      >
        {stepBtnText}
      </button>
    </div>
  );
};

export default StrainCalibItem;

// // ? smartKnob?.sendStrainCalibration(
//   PB.StrainCalibration.create({
//     calibrationWeight,
//   }),
// )
