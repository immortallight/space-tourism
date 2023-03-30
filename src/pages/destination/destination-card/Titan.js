import React from "react";

const Titan = React.memo(() => {
  return (
    <>
      <img src={require("./image-titan.png")} alt="titanImage" />

      <div className="side-destination">
        <h1 className="current-destination"> TITAN </h1>

        <p>
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <div className="hr"></div>

        <div className="time-distance">
          <div className="distance">
            <h5>AVG. DISTANCE</h5>
            <h3> 1.6 bil. km</h3>
          </div>
          <div className="time">
            <h5>EST. TRAVEL TIME</h5>
            <h3> 7 years</h3>
          </div>
        </div>
      </div>
    </>
  );
});
export default Titan;
