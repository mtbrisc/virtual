import { /* Progress, */ DeckContext } from "spectacle";
import ReactDOM from "react-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useContext } from "react";

export function MainTemplate({
  slideNumber,
  numberOfSlides,
}: {
  slideNumber: number;
  numberOfSlides: number;
}) {
  const { stepForward, stepBackward, ...rest } = useContext(DeckContext);
  const renderPortal = (children: React.ReactNode) => {
    return ReactDOM.createPortal(children, document.querySelector("body")!);
  };
  return renderPortal(
    <div className="fixed z-10 bottom-0 w-full p-4 text-white justify-between items-center flex pointer-events-none overflow-visible">
      <button
        onClick={stepBackward}
        disabled={slideNumber === 1 && rest.pendingView.stepIndex === 0}
        className={
          "pointer-events-auto " +
          (slideNumber === 1 && rest.pendingView.stepIndex === 0
            ? "opacity-0"
            : "opacity-100")
        }
      >
        <BsArrowLeft className="w-8 h-8" />
      </button>
      {/* <Progress /> */}
      <button
        onClick={stepForward}
        disabled={slideNumber === numberOfSlides}
        className={
          "pointer-events-auto " +
          (slideNumber === numberOfSlides ? "opacity-0" : "opacity-100")
        }
      >
        <BsArrowRight className="w-8 h-8" />
      </button>
    </div>
  );
}
