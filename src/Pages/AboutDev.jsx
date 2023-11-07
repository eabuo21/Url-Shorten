import React, { useState } from "react";
import Modal from "../Components/Modal/ContactModal";
import Devpix from "../assets/images/devpix.png";

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
      <div className="background-container    bg-gradient-to-br from-neutral-500 to-orange-200 w-full h-full  ">
        <section className="introduction-section flex flex-col  gap-5 justify-center items-center  pt-[4rem]  md:flex-row   md:justify-between  h-[fixed] ">
          <div className=" dev-px-bg bg-gradient-to-br from-red via-rose-400 to-yellow-700   p-2  rounded-tl-full rounded-bl-full rounded-br-full h-[fixed] w-auto  md:ml-[4rem] flex justify-center items-center hover:animate-none shadow-lg shadow-current">
            <img
              src={Devpix}
              alt="developer's-image"
              className=" md:ml-[4rem] md:mr-[2rem]md:relative md:right-[4rem]  md:order-2 rounded-[50%] h-[40vh]"
            />
          </div>
          <div className="  flex flex-col gap-5    bg h-[fixed]  md:w-[50%]">
            <h4 className="introduction-text text-white font-semibold font-sans text-lg  text-left  ml-[2rem] mr-[2rem]  ">
              Hey There! I'm Engr Emmanuel
            </h4>
            <p className="body-text  font-normal  text-base font-sans text-left  text-black ml-[2rem] mr-[2rem]   md:text-2xl ">
              a seasoned Software Engineer and Technical Support Specialist,
              dedicated to delivering exceptional results in the world of
              technology. With a strong background in frontend software
              development, my passion for innovation and a proven track record
              in software deliverables and management set me apart in the
              industry.
            </p>
            <button
              onClick={() => handleGet()}
              className=" get-in-touch  bg-red w-[40vh] h-[fixed] p-2 ml-[2rem] mr-[2rem] text-white font-bold transition-all ease-in-out duration-1000  hover:bg-white hover:transition-all hover:ease-in-out hover:duration-1000 hover:text-red"
            >
              Get in touch
            </button>
            {showModal && <Modal onClose={() => handleCloseModal()} />}
          </div>
        </section>
      </div>
    </>
  );
};
export default AboutDev;
