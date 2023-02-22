import React from "react";

const SpaceCapsule = () => {
  return (
    <>
      <div className="technology-side">
        <h6>THE TERMINOLOGY...</h6>

        <h1>SPACE CAPSULE</h1>
        <p>
          A space capsule is an often-crewed spacecraft that uses <br /> a
          blunt-body reentry capsule to reenter the Earth's <br />
          atmosphere without wings. Our capsule is where you'll
          <br /> spend your time during the flight. It includes a space
          <br /> gym, cinema, and plenty of other activities to keep you
          <br />
          entertained.
        </p>
      </div>
      <img
        src={require("./image-space-capsule-portrait.jpg")}
        alt="TechnologyImage"
      />
    </>
  );
};

export default SpaceCapsule;
