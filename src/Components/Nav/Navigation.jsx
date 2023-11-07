import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/logo.png";

const NavBar = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = scrollPos > 0 ? "bg-white shadow" : "";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //moving line on the nav links
  const [linePosition, setLinePosition] = useState({
    left: "4rem",
    width: 0,
  });

  const handleLinkHover = (event) => {
    const link = event.target;
    const linkRect = link.getBoundingClientRect();
    setLinePosition({
      left: linkRect.left,
      width: linkRect.width,
    });
  };

  return (
    <nav className="bg-white  sticky p-3 z-20 top-0 w-full lg:flex lg:justify-between lg:items-end">
      <div className="container mx-auto flex justify-between     flex-col md:flex-row">
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-red text-3xl hover:text-blue-950"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "flex flex-col " : "hidden"
          } lg:flex lg:items-center`}
        >
          <div className="links-container   flex flex-col    lg:flex-row    lg:justify-center lg:items-center  ">
            <Link to="/">
              <img src={Logo} alt="shortener-logo" className="w-10 h-10" />
            </Link>
          </div>

          <div className="links-container   flex flex-col   p-4   lg:flex-row  bg-grey  h-[100px]     lg:bg-white  lg:justify-center lg:items-center ">
            <ul className="flex flex-col  md:flex-row">
              <li>
                {" "}
                <div
                  onMouseOver={handleLinkHover}
                  onMouseOut={() => setLinePosition({ left: "4rem", width: 0 })}
                  className="border-0 border-b border-white     lg:border-0"
                >
                  <Link
                    to="/"
                    className="text-black text-lg mx-4 hover:text-red"
                  >
                    Shortener Window
                  </Link>
                </div>
              </li>

              <li>
                {" "}
                <div
                  onMouseOver={handleLinkHover}
                  onMouseOut={() => setLinePosition({ left: "4rem", width: 0 })}
                  className="border-0 border-b border-white     lg:border-0"
                >
                  <Link
                    to="/about"
                    className="text-black text-lg mx-4  hover:text-red"
                  >
                    About Developer
                  </Link>
                </div>
              </li>
            </ul>
            <div
              className="moving-line hidden lg:flex"
              style={{
                left: `${linePosition.left}px`,
                width: `${linePosition.width}px`,
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
