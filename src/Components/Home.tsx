import { useState } from "react";
import { SelectedCard } from "./SelectedCard";
import { Card } from "./Create-cards/card";

export const Home = () => {
    const [occasion, setOccasion] = useState<string>('');
    const [selectedImage, setSelectedImage] = useState('');


    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOccasion(event.target.value);
    };

    const handleImageSelect = (imageUrl: string) => {
        setSelectedImage(imageUrl); // Update the selected image URL in the parent component
    };
    console.log("selectedImage", selectedImage)

    return (
        <div>
            {selectedImage === "" ? (
                <div className="container mx-auto max-w-7xl text-center min-w-60">
                    <h1>E-Greeting Activity Logo</h1>
                    <h1>Activity Description</h1>
                    <h1>(600 Characters & Supports Hyperlinks)</h1>
                    <div className="flex justify-center m-5">
                        <div className="min-w-64 text-start">
                            <img className="h-28 w-28 mr-4 rotate-12 mt-5 text-center ml-16" src="https://marketplace.canva.com/EAFQXFlB4ss/2/0/1600w/canva-olive-green-and-orange-halloween-greeting-card-8k3BSjDWCtM.jpg" alt="halloween card" />
                            <p className=" text-gray-500 mt-7 pt-4">Halloween Egreeting Card: </p>
                            <p className="text-gray-500">Trik or Treat</p>
                            <h2 className="font-bold">500 Points</h2>
                        </div>
                    </div>
                    <h1>Feature</h1>
                    {/* <h2>Select an Occasion</h2> */}
                    <div className="m-5 text-start">
                        <div className="pl-36">
                            <h1>Occasions</h1>
                            <select value={occasion} onChange={handleSelectChange}>
                                <option value="">Select Occasions</option>
                                <option value="Halloween">Halloween</option>
                                <option value="DayLight Saving">DayLight Saving</option>
                                <option value="Veteran's Day">Veteran's Day</option>
                                <option value="Thankgiving">Thankgiving</option>
                                <option value="Season’s Greetings Holiday Cheers">Season’s Greetings Holiday Cheers</option>
                                <option value="Valentine’s Day">Valentine’s Day</option>
                                <option value="Mother’s Day">Mother’s Day</option>
                                <option value="Father’s Day">Father’s Day</option>
                            </select>
                        </div>
                        <SelectedCard occasion={occasion} setSelectedImage={handleImageSelect} />
                    </div>
                   
                </div>
            ) : (<Card selectedImage= {selectedImage} />)}

        </div>
    )
}
