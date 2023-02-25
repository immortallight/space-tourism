import styled from "styled-components";
import desktopBackground from "./background-home-desktop.jpg";
import mobileBackground from "./background-home-mobile.jpg";
// import { devices } from "../../components/device";

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
  }
  .explore {
    background-color: white;
    color: #0b0d17;
    border-radius: 50%;
    display: flex;
    // padding: 110px;
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

  @media (max-width: 768px) {
    background-image: url(${mobileBackground});
    // height: 100vh;
    // background-size: cover;

    margin-top: -80px;
    padding: 0px 16px;
    br {
      display: none;
    }
    h1 {
      font-size: 3rem;
      font-weight: 200;
      margin: 15px 0 20px 0;
    }
    h1,
    h2 {
      width: fit-content;
      margin-inline: auto;
    }

    .home-wrapper {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      margin: 120px auto 0 auto;
    }
    .home-p {
      margin-bottom: 70px;
    }

    .explore {
      padding: 10px;
      height: 170px;
      width: 170px;
      justify-content: center;
      margin: auto;
    }
    .explore h2 {
      // font-size: 10px;
      // width: 10rem;
    }
    .explore:hover {
      border: solid 58px rgba(255, 255, 255, 0.3);
    }
  }
`;
export default Homestyled;
