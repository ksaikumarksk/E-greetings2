
export const Step4 = ({image}:any) => {
    return (
        <div className="container flex justify-start mx-auto max-w-7xl min-w-60 mt-24">
            <div className=" contaner mx-auto m-5">
                <p className="text-red-600 p-3">E-GREETING CARD</p>
                <div className=" p-3">
                    <h1 className="text-2xl font-thin">Helloween E-greeting card:</h1>
                    <h1 className="text-2xl font-thin ">Trick or Treat</h1>
                </div>
                <h2 className="text-lg font-bold pl-3">500 Points</h2>
                <h1 className="pl-3">Success!</h1>
                <p className="p-3">Sandra, Your Hallowween E-Greeting Card: Treat has been sent! Sandy Moreland should see your message in their inbox shortly.</p>
                <p className="p-3">Want to keep sharing the love? Take a look at our other desings and another!</p>
            </div>
            <div className="h-96  mr-16">
                <img
                    src={image}
                    alt="helloween"
                />
            </div>
        </div>

    )
}
