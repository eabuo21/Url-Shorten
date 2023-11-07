import React, { useState } from "react";
import Modal from "../Components/Modal/ContactModal";
import Devpix from "../assets/images/devpix.png";
import FlipCards from "../Components/Cards/Cardsarrays";

const AboutDev = () => {
  const [showModal, setShowModal] = useState(false);
  const handleGet = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="background-container py-6   bg-white h-screen   w-full lg:h-screen   ">
        <div className="h-[fixed] p-4">
          <section className="introduction-section flex flex-col  gap-5 justify-center items-center  pt-[1rem]  md:flex-row   md:justify-between  h-[fixed] p-6 pb-8 ">
            <div className=" dev-px-bgi bg-gradient-to-br from-red via-rose-400 to-yellow-700  rounded-full  p-2  h-[fixed] w-auto  md:ml-[4rem] flex  justify-center items-center hover:animate-none shadow-md shadow-current md:w-[45vh]">
              <img
                src={Devpix}
                alt="developer's-image"
                className=" md:ml-[0] md:mr-[2rem]md:relative md:right-[4rem]  md:order-2 rounded-[50%] h-[40vh]"
              />
            </div>
            <div className="  flex flex-col gap-5    bg h-[fixed]  md:w-[50%] justify-center items-center">
              <h4 className="introduction-text text-black font-semibold font-sans text-lg  text-center  ml-[2rem] mr-[2rem]  ">
                Hey There! I'm Engr Emmanuel
              </h4>
              <p className="body-text  font-normal  text-base font-sans text-center  text-black ml-[1rem] mr-[1rem]   md:text-2xl ">
                a seasoned Software Engineer and Technical Support Specialist,
                dedicated to delivering exceptional results in the world of
                technology. With a strong background in frontend software
                development, my passion for innovation and a proven track record
                in software deliverables and management set me apart in the
                industry.
              </p>
              <button
                onClick={() => handleGet()}
                className=" get-in-touch  bg-red w-[40vh] h-[10vh] p-2 ml-[2rem] mr-[2rem] text-white font-bold transition-all ease-in-out duration-1000  hover:bg-white hover:border-red hover:border-2 hover:transition-all hover:ease-in-out hover:duration-1000 hover:text-red"
              >
                Get in touch
              </button>
              {showModal && <Modal onClose={() => handleCloseModal()} />}
            </div>
          </section>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-delay="50"
            className="  pt-[4rem]               md:pt-[8rem] pb-8 "
          >
            <div className="kh flex  flex-col justify-center items-center pt-4 pb-8">
              <p className="text-xl font-bold font-sans text-black">
                Key <span className="text-red"> Highlights </span>
              </p>
              <div className=" border border-gold w-20 rounded-xl relative top-4 "></div>
            </div>
            <FlipCards />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutDev;
