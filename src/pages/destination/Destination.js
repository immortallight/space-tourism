import React, { useState } from "react";
import { Destinationstyle } from "./destination.styled";
import Moon from "./destination-card/Moon";
import Mars from "./destination-card/Mars";
import Europa from "./destination-card/Europa";
import Titan from "./destination-card/Titan";
const Destination = () => {
  const [changeDestination, setChangeDestination] = useState(<Moon />);

  return (
    <Destinationstyle>
      <div className="destination-wrapper">
        {/* <h2>
          <span>01</span> Pick your destination
        </h2> */}
        <div className="section">
          <h2>
            <span>01</span> Pick your destination
          </h2>
          <div className="destination-bar">
            <nav>
              <button onClick={() => setChangeDestination(<Moon />)}>
                MOON
              </button>
              <button onClick={() => setChangeDestination(<Mars />)}>
                MARS
              </button>
              <button onClick={() => setChangeDestination(<Europa />)}>
                EUROPA
              </button>
              <button onClick={() => setChangeDestination(<Titan />)}>
                TITAN
              </button>
            </nav>
          </div>
        </div>
        <div className="destination-card">{changeDestination}</div>
      </div>
    </Destinationstyle>
  );
};
export default Destination;
