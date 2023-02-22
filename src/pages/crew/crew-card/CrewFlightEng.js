import React from "react";

const CrewFlightEng = () => {
  return (
    <>
      <div className="crew-side">
        <h2> Flight Engineer</h2>
        <h1> Anousheh Ansari</h1>
        <p>
          Anousheh Ansari is an Iranian American engineer and
          <br /> co-founder of Prodea Systems. Ansari was the fourth <br />
          self-funded space tourist, the first self-funded woman to
          <br /> fly to the ISS, and the first Iranian in space.
        </p>
      </div>

      <img
        src={require("./image-anousheh-ansari.png")}
        alt="crewImage"
        style={{ width: "25rem" }}
      />
    </>
  );
};
export default CrewFlightEng;
