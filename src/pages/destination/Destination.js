import React, { useState } from "react";
import { Destinationstyle } from "./destination.styled";
import Moon from "./destination-card/Moon";
import Mars from "./destination-card/Mars";
import Europa from "./destination-card/Europa";
import Titan from "./destination-card/Titan";

const Destination = () => {
  const [changeDestination, setChangeDestination] = useState(<Moon />);
  // the mobileImg sets image for the mobile screen
  const [mobileImg, setMobileImg] = useState(
    <img
      src={require("./destination-card/image-moon.png")}
      alt="destinationMobileImage"
    />
  );
  return (
    <Destinationstyle>
      <div className="destination-wrapper">
        <div className="section">
          <h2>
            <span>01</span> Pick your destination
          </h2>
          {/* the mobile-img is a container for setting the images for the mobile screen only, it will be disable in the desktop screen */}
          <div className="mobile-img">{mobileImg}</div>

          <div className="destination-bar">
            <nav>
              <button
                onClick={() => {
                  setChangeDestination(<Moon />);
                  setMobileImg(
                    <img
                      src={require("./destination-card/image-moon.png")}
                      alt="destinationMobileImage"
                    />
                  );
                }}
              >
                MOON
              </button>
              <button
                onClick={() => {
                  setChangeDestination(<Mars />);
                  setMobileImg(
                    <img
                      src={require("./destination-card/image-mars.png")}
                      alt="destinationMobileImage"
                    />
                  );
                }}
              >
                MARS
              </button>
              <button
                onClick={() => {
                  setChangeDestination(<Europa />);
                  setMobileImg(
                    <img
                      src={require("./destination-card/image-europa.png")}
                      alt="destinationMobileImage"
                    />
                  );
                }}
              >
                EUROPA
              </button>
              <button
                onClick={() => {
                  setChangeDestination(<Titan />);
                  setMobileImg(
                    <img
                      src={require("./destination-card/image-titan.png")}
                      alt="destinationMobileImage"
                    />
                  );
                }}
              >
                TITAN
              </button>
            </nav>
          </div>
        </div>
        <div className="destination-card">{changeDestination}</div>
      </div>
    </Destinationstyle>
  );
};
export default Destination;
