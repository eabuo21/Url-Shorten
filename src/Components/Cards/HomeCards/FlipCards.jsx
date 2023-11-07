import React, { useState } from "react";
import CardFlip from "react-card-flip";

const FlipCard = ({ frontTitle, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardFlip
      isFlipped={isFlipped}
      flipDirection="vertical"
      flipSpeedFrontToBack={2}
      flipSpeedBackToFront={2}
      flipOnHover={true}

      wrapperStyle={{ border: "1px solid #ccc" }}
      frontStyle={{ backgroundColor: "#3498db" }}
      backStyle={{ backgroundColor: "#e74c3c" }}
      perspective={2000}
      clickAction="click"
    >
      <div
        onClick={handleCardFlip}
        className="front-card  w-[45vh] h-[200px]  bg-blue-950 justify-center items-center flex cursor-pointer rounded-md shadow-current shadow-lg md:w-[40vh] "
      >
        <h2 className="text-white shadow-sm shadow-current">{frontTitle}</h2>
      </div>
      <div
        onClick={handleCardFlip}
        className="back-card  w-[45vh] h-[200px] bg-black justify-center items-center flex cursor-pointer rounded-md shadow-current shadow-lg  md:w-[40vh]"
      >
        <p className="text-white text-center font-sans  text-base  ml-[1rem] mr-[1rem]  ">{backContent}</p>
      </div>
    </CardFlip>
  );
};

export default FlipCard;
