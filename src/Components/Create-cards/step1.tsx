import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Step2 } from "./step2";
import { IFormInput, useImage } from "./imageContext";




type IDetails = {
    setDetailes: (details: boolean) => any;
    selectedImage: string

}


export const Step1 = ({ setDetailes, selectedImage }: IDetails) => {
    const [stepOpen, setStepOpen] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors }, } = useForm<IFormInput>();
    // const [user,setUser] = useState<IFormInput>();
    const { user, setUser } = useImage();


    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log("data>>>>>>>>", data);
        
        setUser(data)

        setStepOpen(true);
    }

    const name = watch("name");
    const email = watch("email");


    useEffect(() => {
        if(name === ""){
        
            setError("name", {
                type: "required",
                message: "Name is required"
            });
        }
        if(email === ""){

            setError("email", {
                type: "required",
                message: "Email is required"
            });
            // if(email.includes()) 
        }
    },[email, name, setError])
    console.log('stepOpen', stepOpen);
    return (
        <div>
            {stepOpen === false &&
                <div className="container flex justify-start mx-auto max-w-7xl min-w-60 mt-24  shadow-slate-300 border-2">
                    <div className=" contaner mx-auto m-5">

                        <p className="text-red-600 p-3">E-GREETING CARD</p>
                        <div className=" p-3">
                            <h1 className="text-2xl font-thin">Helloween E-greeting card:</h1>
                            <h1 className="text-2xl font-thin ">Trick or Treat</h1>
                        </div>
                        <h2 className="text-lg font-bold pl-3">500 Points</h2>
                        <p className="p-3">Who should we send this to?</p>
                        <form className="flex flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
                            <label>Name</label>
                            <input className="w-96 border-gray-500 border-2 rounded h-10 pl-2" placeholder="Enter frind's name" {...register("name", { required: true , })} />
                            {errors && <p className="text-red-600">{errors.name?.message}</p>}
                            <label className="mt-5">Email</label>
                            <input className="w-96 border-gray-500 border-2 rounded h-10 pl-2" placeholder="Enter frind's email" {...register("email",{required:true, pattern: /^\S+@\S+$/i })} />
                            {errors && <p className="text-red-600">{errors.email?.message}</p>}
                            <p>AARP will never send unsolicited emails or commercial purposes.
                                <br /> Your friend's email will not be used for purposes other than sending
                                <br />your personalized  E-Greeting Card. Please send E-Greeting Cards
                                <br /> only to those friends who will be interested.</p>
                            <div className="mt-6">
                                <button className="m-5 rounded-3xl h-10 w-32 border-red-600 border-2" onClick={() => setDetailes(false)}>Back</button>
                                <button className="bg-red-600 w-32 h-10 rounded-3xl" type="submit" >

                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="min-w-36 max-w-80 h-96 mt-16 mr-16 m-16" >
                        <img className="w-80 h-96 " src={selectedImage} alt="helloween" />
                    </div>
                </div>
            }

            {stepOpen === true && <Step2 setStepOpen={setStepOpen} selectedImage={selectedImage} />}
            {/* {stepOpen ===true &&<Step3 setStepOpen = {setStepOpen}/> } */}
        </div>
    )
}
