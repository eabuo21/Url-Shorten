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
      containerStyle={{ width: "200px", height: "100px" }}
      wrapperStyle={{ border: "1px solid #ccc" }}
      frontStyle={{ backgroundColor: "#3498db" }}
      backStyle={{ backgroundColor: "#e74c3c" }}
      perspective={2000}
      clickAction="click"
    >
      <div
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-delay="50"
        onClick={handleCardFlip}
        className="front-card  flex w-[200px] h-[100px] bg-blue-950 justify-center items-center  cursor-pointer rounded-md shadow-xl"
      >
        <h2>{frontTitle}</h2>
      </div>
      <div
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-delay="50"
        onClick={handleCardFlip}
        className="back-card  flex w-[200px] h-[100px] bg-green-400 justify-center items-center  cursor-pointer rounded-md shadow-xl"
      >
        <p>{backContent}</p>
      </div>
    </CardFlip>
  );
};

export default FlipCard;
