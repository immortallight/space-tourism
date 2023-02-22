import React from "react";

const SpacePort = () => {
  return (
    <>
      <div className="technology-side">
        <h6>THE TERMINOLOGY...</h6>

        <h1>SPACEPORT</h1>
        <p>
          A spaceport or cosmodrome is a site for launching (or <br />{" "}
          receiving) spacecraft, by analogy to the seaport for ships
          <br /> or airport for aircraft. Based in the famous Cape
          <br /> Canaveral, our spaceport is ideally situated to take
          <br /> advantage of the Earth’s rotation for launch.
        </p>
      </div>
      <img
        src={require("./image-spaceport-portrait.jpg")}
        alt="TechnologyImage"
      />
    </>
  );
};
export default SpacePort;
