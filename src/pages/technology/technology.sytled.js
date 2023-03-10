import styled from "styled-components";
import desktopBackground from "./background-technology-desktop.jpg";
import mobileBackground from "./background-technology-mobile.jpg";
import tabletBackground from "./background-technology-tablet.jpg";

export const TechnologyStyle = styled.div`
  background-image: url(${desktopBackground});
  color: #ffff;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: #ffff;
  button {
    background: none;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: #ffff;
    width: 45px;
    height: 45px;
    margin-bottom: 45px;
  }

  button:focus {
    background-color: #ffff;
    color: #0b0d17;
  }
  button:hover {
    border: 1px solid rgba(255, 255, 255, 0.9);
  }
  h1 {
    margin: 5px 0 10px 0;
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
  }
  h2 {
    display: inline;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;

    letter-spacing: 4.725px;
  }
  h2 span {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.3);
  }
  h6 {
    display: inline;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
  section img {
    display: inline;
    height: 23rem;
    width: 26rem;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
  }
  section {
    display: flex;
    justify-content: space-between;
  }
  .technology-wrapper {
    padding: 30% 0 60px 170px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
  }

  .technology-bar {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
  }
  .technology-card {
    display: flex;
    align-items: flex-end;
  }
  .technology-side {
    margin-bottom: 50px;
    margin-right: 240px;
  }
  .mobile-img {
    display: none;
  }

  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    background-image: url (${mobileBackground});
    text-align: center;

    br {
      display: none;
    }
    button {
      width: 45px;
      height: 45px;
      margin: 0 16px;
    }

    h1 {
      font-size: 24px;
      line-height: 28px;
    }
    h2 {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
    }
    h6 {
      line-height: 17px;
      letter-spacing: 2.3625px;
    }
    p {
      font-size: 15px;
      line-height: 25px;
    }
    section img {
      display: none;
    }
    section {
      flex-direction: column;
      padding: 0 16px;
    }

    .technology-wrapper {
      padding: 100px 0 0 0;
      justify-content: flex-start;
    }

    .technology-side {
      margin: 0;
    }

    .technology-bar {
      flex-direction: row;
      justify-content: center;
      margin-top: 0px;
      margin-bottom: 25px;
    }

    .mobile-img {
      display: block;
    }
    .mobile-img img {
      width: 100vw;
      margin: 25px 0 25px 0;
    }
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    background-image: url (${tabletBackground});
    text-align: center;

    br {
      display: none;
    }
    button {
      width: 45px;
      height: 45px;
      margin: 0 16px;
    }

    h1 {
      margin: 35px auto 45px auto;
      line-height: 28px;
    }
    h2 {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
      text-align: left;
      padding-inline: 16px;
    }
    h6 {
      line-height: 17px;
      letter-spacing: 2.3625px;
    }
    p {
      font-size: 15px;
      line-height: 25px;
      width: 55%;
      margin-inline: auto;
    }
    section img {
      display: none;
    }
    section {
      flex-direction: column;
      padding: 0 16px;
    }

    .technology-wrapper {
      padding: 140px 0 0 0;
      justify-content: flex-start;
    }

    .technology-side {
      margin: 0;
    }

    .technology-bar {
      flex-direction: row;
      justify-content: center;
      margin-top: 0px;
      margin-bottom: 25px;
      margin-inline: auto;
    }

    .mobile-img {
      display: block;
    }
    .mobile-img img {
      width: 100vw;
      margin: 45px auto;
    }
  }
`;
