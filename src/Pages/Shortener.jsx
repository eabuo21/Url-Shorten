import React, { useState, useEffect } from "react";
import Bg from "../assets/images/background.jpeg";
import Flips from "../Components/Cards/HomeCards/FlipCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import QRCode from "qrcode.react";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../Components/Notification/Notification";

const Short = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          long_url: originalUrl,
        },
        {
          headers: {
            Authorization: "Bearer 16bfa73b0af8e60a2c74c67a5dabc64b6eae2a89",
          },
        }
      );

      setShortenedUrl(response.data.link);
      setShowQRCode(true);
      setLoading(false);
      showSuccessNotification("Conversion Completed");
    } catch (error) {
      setLoading(false);
      showErrorNotification("Conversion failed, try again");
    }
  };

  const copyToClipboard = () => {
    const textField = document.createElement("textarea");
    textField.innerText = shortenedUrl;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    document.body.removeChild(textField);
  };

  const handleReset = () => {
    setShortenedUrl("");
    setOriginalUrl("");
    setShowQRCode(false);
  };

  return (
    <>
      <div
        className="shortener-container h-screen   w-full lg:h-screen"
        style={{
          background: `url(${Bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
      

        <div className="contents-container  relative   flex flex-col justify-center items-center py-8 lg:top-[20%]">
          <h1
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="2000"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="50"
            className="text-xl font-sans text-white  text-center font-bold md:text-4xl ml-[2rem] mr-[2rem]"
          >
            WELCOME TO URL <span className=" text-red font-bold"> SHORTENER </span>SOFTWARE
          </h1>
          <div className=" border border-gold w-20 rounded-xl relative top-4 "></div>

          <div className=" card-container w-ful py-7"></div>
          <div className=" w-full  flex  gap-4 flex-col justify-center items-center ">
            <input
              type="text"
              placeholder="enter your url here"
              id="url"
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
              className=" rounded-xl shadow-md w-[50vh] p-3 text-base h-[60px] focus:outline-0  lg:w-[50%] "
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            {shortenedUrl && (
              <div
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
                data-aos-duration="2000"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="50"
                className=" rounded-xl shadow-md w-[50vh] p-3 text-sm h-[60px] focus:outline-0  lg:w-[50%] bg-white flex  justify-center items-center  "
              >
                <p>
                  Shortened URL:{" "}
                  <a
                    href={shortenedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {shortenedUrl}
                  </a>
                </p>
                <div className="bg-gray-400 opacity-50 flex p-1 relative left-[3%] h-[60px]  justify-center items-center rounded-md lg:left-[27%] ">
                  <FontAwesomeIcon
                    icon={faCopy}
                    onClick={copyToClipboard}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      fontSize: "1.3em",
                      color: "black",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faUndoAlt}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      fontSize: "1.3em",
                      color: "black",
                    }}
                    onClick={handleReset}
                  />
                </div>
              </div>
            )}
            <div
              className="qr-container-sec"
              data-aos="fade-up" 
              data-aos-easing="ease-in-out"
              data-aos-duration="2000"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="50"
            >
              {showQRCode && <QRCode value={shortenedUrl} size={128} />}
            </div>
            <button
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="2000"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="50"
              type="submit"
              className=" rounded-xl shadow-sm w-[40vh] p-3 m-6 text-2xl h-[60px]  lg:w-[50vh] bg-red text-white transition-all duration-700 ease-in-out hover:bg-white hover:text-black hover:transition-all hover:ease-in-out hover:duration-1000"
              onClick={handleShorten}
            >
              {loading ? (
                <b>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleNotch}
                    className="animate-spin transition-all ease-in-out duration-1000 relative right-5"
                  />{" "}
                  Converting...{" "}
                </b>
              ) : (
                <b> Shorten</b>
              )}
            </button>
          </div>
        </div>
        </div>
       
    </>
  );
};
export default Short;
