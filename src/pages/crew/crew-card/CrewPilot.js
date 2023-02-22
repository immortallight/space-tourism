import React from "react";

const CrewPilot = () => {
  return (
    <>
      <div className="crew-side">
        <h2> Pilot</h2>
        <h1> Victor Glover</h1>
        <p>
          Pilot on the first operational flight of the SpaceX Crew <br/> Dragon to the
          International Space Station. Glover is a <br/> commander in the U.S. Navy
          where he pilots an F/A-18.He <br/> was a crew member of Expedition 64, and
          served as a <br/> station systems flight engineer.
        </p>
      </div>
      <img src={require("./image-victor-glover.png")} alt="crewImage"
        style={{ width: "24rem" }}
      />
    </>
  );
};
export default CrewPilot;
