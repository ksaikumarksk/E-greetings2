import { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { Step3 } from "./step3";
import { useImage } from "./imageContext";
// import { Textarea } from "../ui/Textarea".
// import { Textarea } from "/components/ui/textarea"
import { Textarea } from '../../Components/ui/textarea'


// import { RoosterEditor } from "./textEditer";

type IStep3 = {
  setStepOpen: (stepOpen: boolean) => any;
  selectedImage: string

}

export const Step2 = ({ setStepOpen, selectedImage }: IStep3) => {
  const canvasRef = useRef(null);
  const [textInput, setTextInput] = useState("");
  const [count, setCount] = useState(0);
  const [step3, setStep3] = useState(false);
  const { setImage } = useImage();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    fabric.Image.fromURL(selectedImage, (img) => {
      img.scaleToWidth(400);
      canvas.setDimensions({ width: 600, height: 600 });
      canvas.add(img.set({ left: 50, top: 50 }));
      const Textbox = new fabric.Textbox(textInput, {
        fontSize: 16,
        left: 110,
        top: 250,
        width: 250,
        textAlign: "center",
        cornerSize: 6,
      });
      canvas.add(Textbox);
      canvas.setActiveObject(Textbox);
      canvas.renderAll();

      const dataUrl = canvas.toDataURL({
        format: 'png',
        quality: 0.9,
        multiplier: 2
      });

      setImage(dataUrl)

    }, { crossOrigin: 'Anonymous' });

    return () => {
      canvas.dispose();
    };
  }, [selectedImage, textInput, step3, setImage]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    const inputValueLength = inputValue.length;
    if (inputValueLength <= 500) {
      setTextInput(inputValue);
      console.log(inputValueLength);
      const newCount = 500 - inputValueLength;
      setCount(newCount);
    }
  };

  const handleContinue = () => {
    setStep3(true);
  };

  console.log(step3, "step3");
  console.log("count", count);

  return (
    <div>
      {step3 === false ? (
        <div className="container flex justify-start mx-auto max-w-7xl min-w-60 mt-24 shadow-slate-300 border-2">
          <div className="container mx-auto m-5 pl-5 w-96">
            <p className="text-red-600 p-3">E-GREETING CARD</p>
            <div className="p-3">
              <h1 className="text-2xl font-thin">Halloween E-greeting card:</h1>
              <h1 className="text-2xl font-thin">Trick or Treat</h1>
            </div>
            <h2 className="text-lg font-bold pl-3">500 Points</h2>
            <p className="p-3">Who should we send this to?</p>
            <Textarea className="border-gray-500 border-2 rounded h-36" value={textInput} onChange={handleInputChange} placeholder="Type your message here." />
            <p className="text-gray-500 text-sm text-end">
              {count} of 500 characters left.
            </p>
            <div className="mt-6">
              <button
                className="m-5 rounded-3xl h-10 w-32 border-red-600 border-2"
                onClick={() => setStepOpen(false)}
              >
                Back
              </button>
              <button
                className="bg-red-600 w-32 h-10 rounded-3xl"
                type="submit"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
          <canvas ref={canvasRef} />
        </div>
      ) : (
        <Step3 setStep3={setStep3} />
      )}
    </div>
  );
};
