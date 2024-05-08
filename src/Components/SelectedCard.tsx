import { useState } from 'react';

import halloween1 from '../../src/assets/black-frame-halloween.jpg'
import halloween2 from '../../src/assets/happy-halloween.jpg'
import halloween3 from '../../src/assets/printset-element-halloween.jpg'
import daylight1 from '../../src/assets/alarm-clock.jpg'
import daylight2 from '../../src/assets/times-up.jpg'
import daylight3 from '../../src/assets/autumn-leaves.jpg'

// export const selectedImgFun = () => {}
export const SelectedCard = ({ occasion,setSelectedImage }) => {
  const cardsData = {
    Halloween: [
      {
        id: 1,
        image: halloween1,
        occasion: "Halloween",
        name: "Trick or Treat",
      },
      {
        id: 2,
        image: halloween2,
        occasion: "Halloween",
        name: "Boo",
      },
      {
        id: 3,
        image: halloween3,
        occasion: "Halloween",
        name: "Happy Halloween",
      },
    ],
    "DayLight Saving": [
      {
        id: 4,
        image:daylight1,
        occasion: "DayLight Saving",
        name: "Birthday Poster",
      },
      {
        id: 5,
        image: daylight2,
        occasion: "DayLight Saving",
        name: "Cute Animals",
      },
      {
        id: 6,
        image: daylight3,
        occasion: "DayLight Saving",
        name: "Hand Drawing",
      },
    ],
  };


  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    
  };

  const filteredData = cardsData[occasion];


  return (
    <div className="mt-5 p-5">
      {filteredData && (
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-center">
          {filteredData.map((card) => (
            <div key={card.id} className="min-w-64 text-start mt-4" onClick={() => handleImageClick(card.image)}>
              <img
                className="h-28 w-28 mr-4 rotate-12 mb-5"
                src={card.image}
                alt={occasion + " card"}
              />
              <p className=" text-gray-500 mt-7 pt-4">
                {card.occasion} Egreeting Card:{" "}
              </p>
              <p className="text-gray-500">{card.name}</p>
              <h2 className="font-bold">500 Points</h2>
            </div>
          ))}
        </div>
      )}

      {/* {selectedImage && (
        <div className="mt-5">
          <h3>Selected Image URL:</h3>
          <p>{selectedImage}</p>
        </div>
      )} */}
    </div>
  );
};
