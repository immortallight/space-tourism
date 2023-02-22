import React, { useState } from "react";
import { TechnologyStyle } from "./technology.sytled";
import VehicleCard from "./technology-card/LaunchVehicle";
import SpacePort from "./technology-card/SpacePort";
import SpaceCapsule from "./technology-card/SpaceCapsule";

const Technology = () => {
  const [changeTechnology, setChangeTechnology] = useState(<VehicleCard />);
  return (
    <TechnologyStyle>
      <div className="technology-wrapper">
        <h2>
          <span>03</span> SPACE LAUNCH 101
        </h2>
        <section>
          <div className="technology-bar">
            <button onClick={() => setChangeTechnology(<VehicleCard />)}>
              1
            </button>
            <button onClick={() => setChangeTechnology(<SpacePort />)}>
              2
            </button>
            <button onClick={() => setChangeTechnology(<SpaceCapsule />)}>
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
