import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { Link } from 'react-router-dom';

const ContactModal = ({ onClose }) => {
  return (
    <>
      <div className="form-container fixed inset-0  z-50 flex items-center justify-center bg-transparent">
        <div className="absolute inset-0 bg-gray-300 opacity-25  "></div>
        <div
          data-aos="flip-right"
          data-aos-duration="2000"
          data-aos-delay="50"
          data-aos-easing="ease-out-cubic"
          data-aos-mirror="true"
          data-aos-once="true"
          className="relative top-7 bg-white rounded-sm shadow-2xl px-8 py-6 w-[500px] h-[fixed] p-4 ml-[2rem] mr-[2rem]"
        >
          <button
            onClick={() => onClose()}
            className="absolute text-3xl top-0 right-0 p-2 py-2 mx-2 bg-gray-300 text-black   hover:text-red  rounded-[50%] w-10    justify-center items-center flex "
          >
            <FontAwesomeIcon icon={faTimes} times-icon className="w-[50px] " />
          </button>
          <section className="contact-links-section  h-[fixed] p-6 relative top-5 flex flex-col">
          <p> Connect </p>
                      <Link to="#">
                          <i class="fa-brands fa-github" className="text-red text-2xl"></i>
                          Linkedin
                      </Link>

                       <Link to="#">
                          <i class="fa-brands fa-github" className="text-red text-2xl"></i>
                          Github
                      </Link>

                       <Link to="#">
                          <i class="fa-brands fa-github" className="text-red text-2xl"></i>
                          Skype
                      </Link>
                  </section>
                  
                  <section className="form-section bg-violet-900 w-full h-[fixed] p-3 rounded-md shadow-current flex flex-col justify-center items-center">
                      <p> Send a message</p>
                      
                      <form className="contact-form flex flex-col justify-self-center items-center gap-3 p-2">
                          <input type="text"
                              name="name"
                              placeholder="your full Name"
                          className="bg-zinc-50 "/>

                          <input type="email"
                              name="email"
                              placeholder="email address"
                              className="bg-zinc-50 " />
                          
                          <input type="textarea"
                              name="textarea"
                              placeholder="type your message here"
                          className="bg-zinc-50 h-32"/>

                          <button type="submit"
                              name="submit"
                          className="bg-white w-full ml-7 mr-7 items-center transition-all duration-1000 ease-in-out hover:bg-gray-400 hover:text-white hover:transition-all hover:ease-in-out hover:duration-700">
                              Send
                              </button>
                          

                      </form>
                  </section>
                      
        </div>
      </div>
    </>
  );
};

export default ContactModal;
