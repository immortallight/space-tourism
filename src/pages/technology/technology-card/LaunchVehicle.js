import React from "react";

const VehicleCard = () => {
  return (
    <>
      <div className="technology-side">
        <h6>THE TERMINOLOGY...</h6>

        <h1>LAUNCH VEHICLE</h1>
        <p>
          A launch vehicle or carrier rocket is a rocket-propelled
          <br /> vehicle used to carry a payload from Earth's surface to
          <br /> space, usually to Earth orbit or beyond. Our WEB-X <br />
          carrier rocket is the most powerful in operation. Standing
          <br /> 150 metres tall, it's quite an awe-inspiring sight on the
          <br />
          launch pad!
        </p>
      </div>
      <img
        src={require("./image-launch-vehicle-portrait.jpg")}
        alt="TechnologyImage"
      />
    </>
  );
};
export default VehicleCard;
