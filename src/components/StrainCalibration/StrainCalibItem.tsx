import {
  type FC,
  type PropsWithRef,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import "./StrainCalibItem.scss";

interface StrainCalibItemProps
  extends PropsWithRef<JSX.IntrinsicElements["div"]> {
  image: string;
  step: number;
  stepHTML: ReactNode;
  stepBtnText?: string;
  automatic?: boolean;
  automaticDuration?: number;
  active: boolean;
  nextStepCallback?: () => void;
}

const StrainCalibItem: FC<StrainCalibItemProps> = ({
  image,
  step,
  stepHTML,
  stepBtnText,
  automatic = false,
  automaticDuration = 0,
  active,
  nextStepCallback,
}) => {
  const [countdown, setCountdown] = useState<number>(automaticDuration);
  const active_ref = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  useEffect(() => {
    if (active_ref && active_ref.current) {
      active_ref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
    if (automatic && active) {
      setIsAnimating(true);
      const interval = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : prev));
      }, 1000);
      setCountdown(automaticDuration);
      return () => clearInterval(interval);
    } else {
      setIsAnimating(false);
      setCountdown(automaticDuration);
    }
    // Need to check the dependency array here before fixing
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
  return (
    <div
      className="flex w-fit flex-shrink-0 select-none flex-col gap-4"
      ref={active_ref}
    >
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
        className={`btn ${!active && "btn-disabled pointer-events-none"} ${isAnimating && `button-fill-animation btn-disabled animate-[fillBackground_${automaticDuration}s_forwards]`}`}
        onClick={() => {
          if (automaticDuration > 0 && !automatic) {
            console.log(
              "Automatic duration is set to " + automaticDuration + "s",
            );

            setIsAnimating(true);
          }
          if (nextStepCallback !== undefined) nextStepCallback();
        }}
      >
        {(automatic && countdown + "s") || stepBtnText}
      </button>
    </div>
  );
};

export default StrainCalibItem;
