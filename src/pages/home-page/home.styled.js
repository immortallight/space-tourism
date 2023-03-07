import styled from "styled-components";
import desktopBackground from "./background-home-desktop.jpg";
import mobileBackground from "./background-home-mobile.jpg";
// import { devices } from "../../components/device";

const Homestyled = styled.div`
  background-image: url(${desktopBackground});
  background-size: cover;
  background-repeat: "no-repeat";
  height: 100vh;
  // overflow: hidden;
  // margin-top: -110px;
  // padding: 0px 150px 60px 150px;
  color: #ffff;

  .home-wrapper {
    // margin-top: 230px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px 150px 80px 150px;
    height: 100%;
  }
  .explore {
    background-color: white;
    color: #0b0d17;
    border-radius: 50%;
    display: flex;
    width: 300px;
    height: 300px;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    background-clip: padding-box;
  }
  .explore span {
    font-size: 30px;
  }
  .explore:hover {
    border: solid 58px rgba(255, 255, 255, 0.3);
  }
  .explore h2 {
    font-family: "Bellefair";
  }
  h1 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 150px;
    font-weight: 400;
    margin: 0 auto;
    width: 31rem;
  }

  h2 {
    // font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    // font-size: 28px;
    line-height: 34px;
    margin-inline-auto;
    letter-spacing: 4.725px;

    margin-block: 0;
    // width: 31rem;
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
  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @media (max-width: 900px) {
    background-image: url(${mobileBackground});
    height: 100vh;
    background-size: cover;

    padding: 0px 16px;
    br {
      display: none;
    }
    h1 {
      font-size: 80px;

      font-weight: 200;
      margin: 10px 0 1rem 0;
    }
    h1,
    h2 {
      width: fit-content;
      margin-inline: auto;
    }
    h2 {
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 2.7px;
    }

    .home-wrapper {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      padding: 100px 16px 0 16px;
    }
    .home-p {
      margin-bottom: 0px;
      font-size: 15px;
      line-height: 25px;
    }

    .explore {
      padding: 10px;
      height: 180px;
      width: 180px;
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
