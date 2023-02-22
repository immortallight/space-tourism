import React from "react";

const Commander = () => {
  return (
    <>
      <div className="crew-side">
        <h2>Commander</h2>
        <h1>Douglas Hurley</h1>
        <p>
          Douglas Gerald Hurley is an American engineer, former <br />
          Marine Corps pilot and former NASA astronaut. He <br /> launched into
          space for the third time as commander of <br /> Crew Dragon Demo-2.
        </p>
      </div>

      <img src={require("./image-douglas-hurley.png")} alt="crewImage" />
    </>
  );
};
export default Commander;
