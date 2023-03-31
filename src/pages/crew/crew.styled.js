import styled from "styled-components";
import desktopBackground from "./background-crew-desktop.jpg";
import mobileBackground from "./background-crew-mobile.jpg";
import tabletBackground from "./background-crew-tablet.jpg";

export const CrewStyle = styled.div`
  background-image: url(${desktopBackground});
  background-position: center 80%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;

  color: #ffff;
  h1 {
    margin: 10px 0 20px 0;
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    text-transform: uppercase;
  }
  h2 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    text-transform: uppercase;
  }
  h2 span {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.3);
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
  }

  button {
    border: none;
    background: none;
    color: rgba(255, 255, 255, 0.4);
  }
  button:focus {
    color: #ffff;
  }
  button:hover {
    color: rgba(255, 255, 255, 0.6);
  }
  .crew-wrapper {
    padding: 0px 170px 0 170px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
    padding-bottom: 60px;
  }
  .crew-card {
    display: flex;
    justify-content: space-between;
  }
  .crew-card img {
    width: 21.8rem;
    position: absolute;
    bottom: 0%;
    right: 20%;
  }
  .crew-side {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .crew-banner {
    margin-bottom: 90px;
  }

  .crew-bar {
    margin-top: 50px;
    display: flex;
  }
  .crew-bar > * {
    margin-inline: 5px;
    width: 12px;
    color: rgba(255, 255, 255, 0.3);
  }
  .mobile-img img {
    display: none;
  }
  .hr {
    display: none;
  }

  //  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    background-image: url (${mobileBackground});
    text-align: center;

    br {
      display: none;
    }

    h1 {
      margin: 0 auto 10px auto;
      font-size: 24px;
      line-height: 28px;
    }
    h2 {
      font-size: 16px;
      line-height: 18px;
      margin: 4% auto;
    }
    p {
      font-size: 15px;
      line-height: 25px;
    }
    .crew-wrapper {
      padding: 15% 16px 0 16px;
      align-item: center;
      justify-content: flex-start;
    }
    .crew-banner {
      margin-bottom: 0;
    }

    .crew-card {
      margin: 0 auto;
      order: 5;
    }
    .crew-card img {
      display: none;
    }
    .crew-bar {
      margin: 15px auto;
      display: flex;
    }
    .crew-bar > * {
      margin-inline: 7%;
      width: 10px;
    }
    .mobile-img img {
      width: 12.5rem;
      display: block;
      margin: 15px auto 0 auto;
    }
    .hr {
      display: block;
      width: 18.5rem;
      height: 0;
      border-bottom: solid 1px rgba(255, 255, 255, 0.3);
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    background-image: url (${tabletBackground});
    text-align: center;
     br {
      display: none;
    }

    h1 {
      margin: 0 auto 10px auto;
      font-size: 24px;
      line-height: 28px;
    }
    h2 {
      font-size: 16px;
      line-height: 18px;
      margin: 35px auto 15px auto;
    }
    p {
      font-size: 15px;
      line-height: 25px;
      width: 55%;
      margin-inline: auto;
    }
    .crew-wrapper {
      padding: 140px 16px 0 16px;
      align-item: center;
      justify-content: flex-start;
    }
    .crew-banner {
      margin: 0;
      text-align: left;
    }

    .crew-card {
      margin: 20px auto 0 auto;
      flex-direction: column;
    }
    .crew-card img {
      display: block;
      width: 58%;
      // margin-inline: auto;
      margin-left: -223px;
      right: 0%;
      left: 50%;

    }
    .crew-bar {
      margin: 15px auto;
      display: flex;
    }
    .crew-bar > * {
      margin-inline: 10px;
      width: 10px;
    }
    .mobile-img  {
      display: none;
    }
    .hr {
      display: none;
    }
`;
