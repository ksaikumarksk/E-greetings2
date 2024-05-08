// import axios from "axios"
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  discription: string;
}

export const Massaging = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log("data", data);
    try {
      const response = await fetch("http://127.0.0.1:3000/send-email", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("res>>>>>>", result);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto max-w-7xl min-w-60 mt-24">
      <form
        className="flex flex-col justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>Name</label>
        <input
          className="w-96 border-gray-500 border-2 rounded h-10 pl-2"
          placeholder="Enter frind's name"
          {...register("name")}
        />
        <label className="mt-5">Email</label>
        <input
          className="w-96 border-gray-500 border-2 rounded h-10 pl-2"
          placeholder="Enter frind's email"
          {...register("email")}
        />
        <label className="mt-5">
          Add your own message, or use this onChange
        </label>
        <input
          className="w-96 h-32 border-gray-500 border-2 rounded pl-2"
          placeholder="Hoping that 50 is as fabulous as you!"
          type="text"
          {...register("discription")}
        />
        <p className="text-gray-500 ml-60 text-xs">
          500 of 500 characters left
        </p>
        <input className="text-start" type="submit" />
      </form>
    </div>
  );
};
