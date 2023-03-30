import React, { useState, useCallback } from "react";
import { Destinationstyle } from "./destination.styled";
import Moon from "./destination-card/Moon";
import Mars from "./destination-card/Mars";
import Europa from "./destination-card/Europa";
import Titan from "./destination-card/Titan";

const Destination = React.memo(() => {
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
                onClick={useCallback(() => {
                  setChangeDestination(<Moon />);
                  setMobileImg(
                    <img
                      src={require("./destination-card/image-moon.png")}
                      alt="destinationMobileImage"
                    />
                  );
                }, [setChangeDestination])}
              >
                MOON
              </button>
              <button
                onClick={useCallback(() => {
                  setChangeDestination(<Mars />);
                  setMobileImg(
                    <img
                      src={require("./destination-card/image-mars.png")}
                      alt="destinationMobileImage"
                    />
                  );
                }, [setChangeDestination])}
              >
                MARS
              </button>
              <button
                onClick={useCallback(() => {
                  setChangeDestination(<Europa />);
                  setMobileImg(
                    <img
                      src={require("./destination-card/image-europa.png")}
                      alt="destinationMobileImage"
                    />
                  );
                }, [setChangeDestination])}
              >
                EUROPA
              </button>
              <button
                onClick={useCallback(() => {
                  setChangeDestination(<Titan />);
                  setMobileImg(
                    <img
                      src={require("./destination-card/image-titan.png")}
                      alt="destinationMobileImage"
                    />
                  );
                }, [setChangeDestination])}
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
});
export default Destination;
