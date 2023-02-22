import React from "react";

const Mars = () => {
  return (
    <>
      <img src={require("./image-mars.png")} alt="marsImage" />

      <div className="side-destination">
        <h1 className="current-destination"> MARS </h1>

        <p>
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
        <div className="hr"></div>

        <div className="time-distance">
          <div className="distance">
            <h5>AVG. DISTANCE</h5>
            <h3>225 mil. km</h3>
          </div>
          <div className="time">
            <h5>EST. TRAVEL TIME</h5>
            <h3>9 months</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mars;
