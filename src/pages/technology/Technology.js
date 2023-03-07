import React, { useState } from "react";
import { TechnologyStyle } from "./technology.sytled";
import VehicleCard from "./technology-card/LaunchVehicle";
import SpacePort from "./technology-card/SpacePort";
import SpaceCapsule from "./technology-card/SpaceCapsule";

const Technology = () => {
  const [changeTechnology, setChangeTechnology] = useState(<VehicleCard />);
  // the mobileImg sets image for the mobile screen
  const [mobileImg, setMobileImg] = useState(
    <img
      src={require("./technology-card/image-launch-vehicle-landscape.jpg")}
      alt="destinationMobileImage"
    />
  );
  return (
    <TechnologyStyle>
      <div className="technology-wrapper">
        <h2>
          <span>03</span> SPACE LAUNCH 101
        </h2>
        {/* the mobile-img is a container for setting the images for the mobile screen only, it will be disable in the desktop screen */}
        <div className="mobile-img">{mobileImg}</div>
        <section>
          <div className="technology-bar">
            <button
              onClick={() => {
                setChangeTechnology(<VehicleCard />);
                setMobileImg(
                  <img
                    src={require("./technology-card/image-launch-vehicle-landscape.jpg")}
                    alt="technologyMobileImage"
                  />
                );
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                setChangeTechnology(<SpacePort />);
                setMobileImg(
                  <img
                    src={require("./technology-card/image-spaceport-landscape.jpg")}
                    alt="technologyMobileImage"
                  />
                );
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                setChangeTechnology(<SpaceCapsule />);
                setMobileImg(
                  <img
                    src={require("./technology-card/image-space-capsule-landscape.jpg")}
                    alt="technologyMobileImage"
                  />
                );
              }}
            >
              3
            </button>
          </div>
          <div className="technology-card">{changeTechnology}</div>
        </section>
      </div>
    </TechnologyStyle>
  );
};
export default Technology;
