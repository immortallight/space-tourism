import React, { useState } from "react";
import { GiPlainCircle } from "react-icons/gi";
import { CrewStyle } from "./crew.styled";
import Commander from "./crew-card/Commander";
import CrewSpecialist from "./crew-card/CrewSpecialist";
import CrewPilot from "./crew-card/CrewPilot";
import CrewFlightEng from "./crew-card/CrewFlightEng";

const Crew = () => {
  const [changeCrew, setChangeCrew] = useState(<Commander />);
  // the mobileImg sets image for the mobile screen
  const [mobileImg, setMobileImg] = useState(
    <img
      src={require("./crew-card/image-douglas-hurley.png")}
      alt="crewMobileImage"
    />
  );

  return (
    <CrewStyle>
      <div className="crew-wrapper">
        <h2 className="crew-banner">
          <span>02</span> Meet your crew
        </h2>
        {/* the mobile-img is a container for setting the images for the mobile screen only, it will be disable in the desktop screen */}
        <div className="mobile-img">{mobileImg}</div>
        <div className="hr"></div>

        <div className="crew-card">{changeCrew}</div>

        <div className="crew-bar">
          <button>
            <GiPlainCircle
              onClick={() => {
                setChangeCrew(<Commander />);
                setMobileImg(
                  <img
                    src={require("./crew-card/image-douglas-hurley.png")}
                    alt="crewMobileImage"
                  />
                );
              }}
            />
          </button>

          <button>
            <GiPlainCircle
              onClick={() => {
                setChangeCrew(<CrewSpecialist />);
                setMobileImg(
                  <img
                    src={require("./crew-card/image-mark-shuttleworth.png")}
                    alt="crewMobileImage"
                  />
                );
              }}
            />
          </button>

          <button>
            <GiPlainCircle
              onClick={() => {
                setChangeCrew(<CrewPilot />);
                setMobileImg(
                  <img
                    src={require("./crew-card/image-victor-glover.png")}
                    alt="crewMobileImage"
                  />
                );
              }}
            />
          </button>

          <button>
            <GiPlainCircle
              onClick={() => {
                setChangeCrew(<CrewFlightEng />);
                setMobileImg(
                  <img
                    src={require("./crew-card/image-anousheh-ansari.png")}
                    alt="crewMobileImage"
                  />
                );
              }}
            />
          </button>
        </div>
      </div>
    </CrewStyle>
  );
};

export default Crew;
