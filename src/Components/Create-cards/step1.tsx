import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Step2 } from "./step2";
// import { IFormInput, useUser, } from "./userContext";




type IDetails = {
    setDetailes: (details: boolean) => any;
    selectedImage: string

}

export type IFormInput = {
    name: string,
    email: string,
}
export const Step1 = ({ setDetailes, selectedImage }: IDetails) => {
    const [stepOpen, setStepOpen] = useState<boolean>(false)
    const [user, setUser] = useState<IFormInput | undefined>(undefined);
    const [errors, setErrors] = useState({
        name: "",
        email: ""
    });

    const {
        register,
        handleSubmit,
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log("data>>>>>>>>", data);
        if (data.name === '') {
            setErrors({ ...errors, name: "Please enter the recipient's name" })
            console.log("name")
            setStepOpen(false);

        }
        if (data.email === '') {
            setErrors({ ...errors, email: "Please enter the recipient email" })
            console.log("email")
            setStepOpen(false);

        }
        if (data.name === "" && data.email === "") {
            setStepOpen(false);

            setErrors({
                name: "Pleaase enter recipient's name",
                email: "Please enter the recipient email"
                
            })
        } else {
            setUser(data)
            setErrors({
                name: "",
                email: ""
            })
            setStepOpen(true);
        }
        // setUser(data)

        // setStepOpen(true);
    }

    console.log(user);
    console.log('errors', errors);
    return (
        <div>
            {stepOpen === false &&
                <div className="container flex justify-start mx-auto max-w-7xl min-w-60 mt-24  shadow-slate-300 border-2">
                    <div className=" contaner mx-auto m-5">

                        <p className="text-red-600 p-2">E-GREETING CARD</p>
                        <div className=" p-2">
                            <h1 className="text-2xl font-thin">Helloween E-greeting card:</h1>
                            <h1 className="text-2xl font-thin ">Trick or Treat</h1>
                        </div>
                        <h2 className="text-lg font-bold pl-2">500 Points</h2>
                        <h2 className="p-2 font-bold text-xs">STEP 1 OF 3</h2>
                        <p className="p-2 font-bold">Who should we send this to?</p>
                        <form className="flex flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
                            <label>Name</label>
                            <input className="w-96 border-gray-500 border-2 rounded h-10 pl-2" placeholder="Enter frind's name" {...register("name",{required:true, minLength:2})} />
                            {errors && <p className="text-red-600">{errors.name}</p>}
                            <label className="mt-5">Email</label>
                            <input className="w-96 border-gray-500 border-2 rounded h-10 pl-2" placeholder="Enter frind's email" {...register("email", {required:true, pattern: /^\S+@\S+$/i })} />
                            {errors && <p className="text-red-600">{errors.email}</p>}
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

            {stepOpen === true && user && <Step2 setStepOpen={setStepOpen} selectedImage={selectedImage} user={user} />}
        </div>
    )
}
