import React, { useState } from "react";
import { GiPlainCircle } from "react-icons/gi";
import { CrewStyle } from "./crew.styled";
import Commander from "./crew-card/Commander";
import CrewSpecialist from "./crew-card/CrewSpecialist";
import CrewPilot from "./crew-card/CrewPilot";
import CrewFlightEng from "./crew-card/CrewFlightEng";

const Crew = () => {
  const [changeCrew, setChangeCrew] = useState(<Commander />);

  return (
    <CrewStyle>
      <div className="crew-wrapper">
        <h2 className="crew-banner">
          <span>02</span> Meet your crew
        </h2>

        <div className="crew-card"> {changeCrew}</div>
        <div className="crew-bar">
          <button>
            <GiPlainCircle onClick={() => setChangeCrew(<Commander />)} />
          </button>
          <button>
            <GiPlainCircle onClick={() => setChangeCrew(<CrewSpecialist />)} />
          </button>
          <button>
            <GiPlainCircle onClick={() => setChangeCrew(<CrewPilot />)} />
          </button>
          <button>
            <GiPlainCircle onClick={() => setChangeCrew(<CrewFlightEng />)} />
          </button>
        </div>
      </div>
    </CrewStyle>
  );
};

export default Crew;
