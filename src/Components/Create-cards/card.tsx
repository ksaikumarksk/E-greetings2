import { useState } from "react"
import { Step1 } from "./step1"

type ISelectedImage = {
    selectedImage: string
}

export const Card = ({ selectedImage }: ISelectedImage) => {
    const [details, setDetails] = useState<boolean>(false)


    console.log("details", details)
    return (
        <div>
            {details === false &&
                <div className="container flex justify-center mx-auto max-w-7xl min-w-60 mt-24 p-16 shadow-slate-300 border-2">
                    <div className="contaner mx-auto max-w-7xl min-w-60 mt-24 drop-shadow-md">

                        <p className="text-red-600 p-3">E-GREETING CARD</p>
                        <div className=" p-3">
                            <h1 className="text-2xl font-thin">Helloween E-greeting card:</h1>
                            <h1 className="text-2xl font-thin ">Trick or Treat</h1>
                        </div>
                        <h2 className="text-lg font-bold pl-3">500 Points</h2>
                        <p className="p-3">Customize your message and send to your friends and loved ones!</p>
                        <button className="bg-red-600 w-48 h-10 rounded-3xl" onClick={() => { setDetails(true) }}>
                            Create your card
                        </button>
                    </div>
                    <div>
                        <img className="mim-w-36 max-h-80 rotate-12" src={selectedImage} alt="helloween" />
                    </div>
                </div>
            }
            {details === true && <Step1 setDetailes={setDetails} selectedImage={selectedImage} />}
            {/* <Step1/> */}
        </div>
    )
}
