import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Short from "../src/Pages/Shortener";
import About from "../src/Pages/AboutDev";
import Nav from "../src/Components/Nav/Navigation";
import { HashLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    simulateWebsiteLoading()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Loading error:", error);
        setLoading(false);
      });
  }, []);

  const simulateWebsiteLoading = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  return (
    <div className="App">
      
      {loading ? (
        <div className="loader-container">
          <HashLoader color={"red"} loading={true} size={80} />
        </div>
      ) : (
        <>
         
            <Nav />
         
            
          <Routes>
            <Route path="/" element={<Short />} />
            <Route path="/about" element={<About />} />
            </Routes>
            <section className="notifiction-section">
               <ToastContainer />
            </section>
        </>
      )}
    </div>
  );
}

export default App;
