import React from "react";

const CrewSpecialist = () => {
  return (
    <>
      <div className="crew-side">
        <h2>Mission Specialist</h2>
        <h1>Mark Shuttleworth</h1>
        <p>
          Mark Richard Shuttleworth is the founder and CEO of <br /> Canonical,
          the company behind the Linux-based Ubuntu <br /> operating system.
          Shuttleworth became the first South <br /> African to travel to space
          as a space tourist.
        </p>
      </div>

      <img
        src={require("./image-mark-shuttleworth.png")}
        alt="crewImage"
        style={{ width: "20rem" }}
      />
    </>
  );
};
export default CrewSpecialist;
