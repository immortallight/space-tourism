import styled from "styled-components";
import desktopBackground from "./background-home-desktop.jpg";
import mobileBackground from "./background-home-mobile.jpg";
import tabletBackground from "./background-home-tablet.jpg";

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
    align-items: center;
    padding: 10% 10% 0 10%;
    height: 100%;
  }
  .explore {
    background-color: white;
    color: #0b0d17;
    border-radius: 50%;
    display: flex;
    width: 18rem;
    height: 18rem;
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
    font-size: 900%;
    font-weight: 400;
    margin: 0 auto;
    // width: 31rem;
    display: inline-block;
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
    display: inline-block;

  }
  .home-p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    // width: 48%;
  }
  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    background-image: url(${mobileBackground});
    height: 100vh;
    background-size: cover;
    margin-inline: auto;


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
      margin-inline: auto;

    }
    .side{
      // margin-inline: auto;
    }
    .home-p {
      margin-bottom: 0px;
      font-size: 15px;
      line-height: 25px;
      margin-inline: auto;

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
    @media only screen and (min-width: 577px) and (max-width: 768px) {
    background-image: url(${tabletBackground});
    // background-size: cover;
    background-position: center;
    // transform: rotate(90deg);

    text-align: center;
     padding: 0px 16px;
    br {
      display: none;
    }
    h1 {
         font-size: 150px;
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
      padding: 200px 16px 0 16px;
      margin-inline: auto;

    }
    .side{
      margin-inline: auto;
    }
    .home-p {
      font-size: 15px;
      line-height: 25px;
      width: 55%;
      margin-inline: auto;
    }

    .explore {
      padding: 20px;
      height: 230px;
      width: 230px;
      justify-content: center;
      margin: auto;
    }
    .explore h2 {
      font-size: 22px;
      // width: 10rem;
    }
    .explore:hover {
      border: solid 58px rgba(255, 255, 255, 0.3);
    }
  }
`;
export default Homestyled;
