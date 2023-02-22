import React from "react";

const Moon = () => {
  return (
    <>
      <img src={require("./image-moon.png")} alt="moonImage" />

      <div className="side-destination">
        <h1 className="current-destination"> MOON </h1>

        <p>
          See our planet as you’ve never seen it before. A perfect <br />
          relaxing trip away to help regain perspective and come <br /> back
          refreshed. While you’re there, take in some history <br /> by visiting
          the Luna 2 and Apollo 11 landing sites.
        </p>
        <div className="hr"></div>

        <div className="time-distance">
          <div className="distance">
            <h5>AVG. DISTANCE</h5>
            <h3>384,400 km</h3>
          </div>
          <div className="time">
            <h5>EST. TRAVEL TIME</h5>
            <h3>3 days</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Moon;
