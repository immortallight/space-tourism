import styled from "styled-components";
import desktopBackground from "./background-home-desktop.jpg";

const Homestyled = styled.div`
  background-image: url(${desktopBackground});
  background-size: cover;
  background-repeat: "no-repeat";
  height: 100vh;
  overflow: hidden;
  margin-top: -110px;
  padding: 0px 150px;
  color: #ffff;

  .home-wrapper {
    margin-top: 230px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .explore {
      background-color: white;
      color: #0b0d17;
      border-radius: 50%;
      display: flex;
      padding: 50px;
      width: 300px;
      height: 300px;
      justify-content: center;
      align-items: center;
      text-align: center;
      cursor: pointer;
      background-clip: padding-box;
      // box-sizing: content-box;
    }
    .explore span {
      font-size: 30px;
    }
    .explore:hover {
      border: solid 58px rgba(255, 255, 255, 0.3);
    }
  }
  h1 {
    font-size: 8rem;
    font-weight: 200;
    margin: 0;
    // display: inline-block;
    width: 31rem;
  }
  h2 {
    margin-block: 0;

    width: 31rem;
  }
  .side {
    flex-direction: column;
  }
  .home-p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    // width: 48%;
  }
`;
export default Homestyled;
