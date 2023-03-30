import React from "react";
import Homestyled from "./home.styled";

const Home = React.memo(() => {
  return (
    <Homestyled>
      <div className="home-wrapper">
        <div className="side">
          <h2>So, you want to travel to</h2>
          <h1>SPACE</h1>
          <p className="home-p">
            Let's face it; if you want to go to space, you might as well
            <br />
            genuinely go to outer space and not hover kind of on the
            <br /> edge of it. Well sit back, and relax because we'll give you a
            <br /> truly out of this world experience!
          </p>
        </div>
        <div className="explore">
          <h2>Explore</h2>
        </div>
      </div>
    </Homestyled>
  );
});
export default Home;
