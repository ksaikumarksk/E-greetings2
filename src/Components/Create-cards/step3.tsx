import { useEffect, useState } from "react";
// import { useUser } from "./userContext";
import { Step4 } from "./step4";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type IStateImage = {
  setStep3: (step3: boolean) => any;
  image: string;
  user:{
    name: string;
    email: string;
  }

}

export const Step3 = ({ setStep3, image,user }: IStateImage) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File | undefined>();
  const [startDate, setStartDate] = useState<Date | null>(null);

  useEffect(() => {
    const byteString = atob(image.split(',')[1]);
    const mimeString = image.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: mimeString });
    const file = new File([blob], 'image.jpg', { type: mimeString });
    setImageFile(file);
  }, [image])

  console.log("user", user);
  const handleContinue = async () => {
    try {
      const formData = new FormData();
      formData.append('file', imageFile as Blob);
      formData.append('name', user.name);
      formData.append('email', user.email);
      console.log("Sending image to server...", formData)
      
      setOpen(true);
      const response = await fetch("http://127.0.0.1:3000/upload/image", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("res>>>>>>", result);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  console.log("open", open)
  return (
    <div>
      {open === false ? (
        <div className="container flex justify-start mx-auto max-w-7xl min-w-60 mt-24  shadow-slate-300 border-2">
          <div className=" contaner mx-auto m-5">
            <p className="text-red-600 p-3">E-GREETING CARD</p>
            <div className=" p-3">
              <h1 className="text-2xl font-thin">Helloween E-greeting card:</h1>
              <h1 className="text-2xl font-thin ">Trick or Treat</h1>
            </div>
            <h2 className="text-lg font-bold pl-3">500 Points</h2>
            <p className="p-3">Who should we send this to?</p>
            <div>
              <label className="p-3">
                <input
                  type="radio"
                  value="Now"
                  checked={selectedOption === "Now"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                Now
              </label>

              <label>
                <input
                  type="radio"
                  value="date"
                  checked={selectedOption === "date"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <DatePicker className="border-gray-500 border-2 rounded" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
              </label>
            </div>
            <p className="text-gray-700 pt-10 pl-3 max-w-lg">You're about to redeem 500points to send saikumar k at smoreland@ aarp.org a Halloween E-greeting card: Trick or Treat. It's scheduled to send Now. </p>

            <div className="mt-6">
              <button
                className="m-5 rounded-3xl h-10 w-32 border-red-600 border-2"
                onClick={() => setStep3(false)}
              >
                Back
              </button>
              <button className="bg-red-600 w-32 h-10 rounded-3xl" onClick={handleContinue}>Continue</button>
            </div>
          </div>
          <div className="h-96 mt-16 mr-16 m-16">
            <img
              className="h-96"
              src={image}
              alt="helloween"
            />
          </div>
        </div>
      ) : (
        <Step4 image={image} />
      )}
    </div>
  );
};

