import React from "react";
import Flips from "../Cards/HomeCards/FlipCards";

function Cards() {
  const card = [
    {
      frontTitle: "Expertise",
      backContent: "My journey in the tech world has been marked by a deep expertise in frontend software development, ensuring that user experiences are not only seamless but exceptional.",
    },

    {
      frontTitle: "Results-Driven",
      backContent: "I am committed to achieving results and have consistently demonstrated my ability to meet and exceed project goals and deadlines.",
    },

    {
      frontTitle: "Team Leadership",
      backContent: "Adept at project management, I have a track record of successfully leading teams to create and deliver outstanding software solutions.",
      },
      {
          frontTitle: "Tech Enthusiast:",
          backContent: "I am not only a professional but also a true tech enthusiast, staying at the forefront of emerging technologies to ensure my clients receive the best solutions.",
    }
  ];

  return (
    <div className=" flex flex-col gap-5  justify-center items-center             lg:justify-center lg:flex-row lg:flex-wrap                md:justify-center md:flex-row md:flex-wrap  ">
      {card.map((card, index) => (
        <div
          key={index}
              className="  " 
        >
          <Flips frontTitle={card.frontTitle} backContent={card.backContent} />
        </div>
      ))}
    </div>
  );
}
export default Cards;
