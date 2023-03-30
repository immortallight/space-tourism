import React from "react";

const Europa = React.memo(() => {
  return (
    <>
      <img src={require("./image-europa.png")} alt="europaImage" />

      <div className="side-destination">
        <h1 className="current-destination"> EUROPA </h1>

        <p>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
        <div className="hr"></div>

        <div className="time-distance">
          <div className="distance">
            <h5>AVG. DISTANCE</h5>
            <h3>628 mil. km</h3>
          </div>
          <div className="time">
            <h5>EST. TRAVEL TIME</h5>
            <h3>3 years</h3>
          </div>
        </div>
      </div>
    </>
  );
});
export default Europa;
