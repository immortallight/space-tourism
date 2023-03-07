import styled from "styled-components";
import desktopBackground from "./background-destination-desktop.jpg";
import mobileBackground from "./background-destination-mobile.jpg";
export const Destinationstyle = styled.div`
  background-image: url(${desktopBackground});
  background-size: cover;
  background-repeat: "no-repeat";
  height: 100vh;
  color: #ffff;

  button {
    margin-right: 50px;
    border: none;
    background: none;
    color: #ffff;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    padding-bottom: 10px;
    animation: butmove 2s;
  }
  button:focus {
    border-bottom: solid 3px #ffff;
  }
  button:hover {
    border-bottom: solid 3px rgba(255, 255, 255, 0.5);
  }

  @keyframes butmove {
    from {
      margin-right: 20px;
    }
    to {
      margin-right: 50px;
    }
  }
  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
  }

  .section {
    display: flex;
    justify-content: space-between;
    height: 7.5rem;
    width: 100%;
  }
  h2 {
    // font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;

    letter-spacing: 4.725px;
    text-transform: uppercase;
  }
  h2 span,
  h5 {
    font-style: normal;
    font-weight: 400;
    letter-spacing: 2.3625px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.3);
  }
  h3 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    // line-height: 32px;
    text-transform: uppercase;
  }
  h5 {
    margin-bottom: 10px;
  }
  img {
    margin-left: 2rem;
    width: 300px;
    height: 300px;
    animation: spin infinite linear 20s;
  }

  .destination-wrapper {
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 30% 170px 60px 170px;
    height: 100vh;
  }

  .current-destination {
    margin: 0;
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 115px;
  }

  .destination-bar {
    display: flex;
    margin: 70px 110px auto auto;
  }
  .destination-card {
    display: flex;
    justify-content: flex-start;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .side-destination {
    display: flex;
    flex-direction: column;
    margin-left: 13.5rem;
  }

  .hr {
    width: 28rem;
    height: 0;
    border-bottom: solid 1px rgba(255, 255, 255, 0.3);
    margin: 40px 0 20px 0;
  }
  .time-distance {
    display: flex;
    justify-content: space-between;
    margin-right: 160px;
  }

  .section img {
    display: none;
  }
  // // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @media (max-width: 900px) {
    background-image: url (${mobileBackground});

    br {
      display: none;
    }
    button {
      margin-inline: 15px;
      line-height: initial;
      // margin-top: 230px;
    }
    @keyframes butmove {
      from {
        margin-inline: 10px;
      }
      to {
        margin-inline: 20px;
      }
    }

    h2 {
      font-size: 16px;
      letter-spacing: 2.7px;
    }
    h3 {
      font-size: 28px;
    }
    h5 {
      margin: 0;
    }
    p {
      font-size: 15px;
      line-height: 25px;
    }

    .section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: fit-content;
    }
    .section img {
      display: block;
      width: 174px;
      height: 174px;
      margin: 25px auto;
    }

    .destination-wrapper {
      flex-direction: column;
      justify-content: flex-start;
      text-align: center;
      margin: 0 auto 0 auto;
      flex-direction: column;
      text-align: center;
      padding: 90px 16px 0 16px;
    }
    .current-destination {
      margin: 25px auto 15px auto;
      font-size: 56px;
      line-height: initial;
    }
    .destination-card {
      justify-content: center;
    }
    .destination-card img {
      display: none;
    }
    .destination-bar {
      justify-content: center;
      margin: 0 auto;
    }

    .destination-bar nav {
      display: flex;
      justify-content: space-evenly;
    }

    .destination-card {
      flex-direction: column;
    }

    .side-destination {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }

    .hr {
      width: 18.5rem;
      height: 0;
      border-bottom: solid 1px rgba(255, 255, 255, 0.3);
      margin: 25px auto 15px auto;
    }
    .time-distance {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 0 auto;
    }
    .distance {
      margin-bottom: 20px;
    }
  }
`;
