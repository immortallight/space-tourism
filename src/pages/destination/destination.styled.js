import styled from "styled-components";
import desktopBackground from "./background-destination-desktop.jpg";
import mobileBackground from "./background-destination-mobile.jpg";
export const Destinationstyle = styled.div`
  background-image: url(${desktopBackground});
  background-size: cover;
  background-repeat: "no-repeat";
  height: 100vh;
  overflow-y: hidden;
  margin-top: -110px;
  color: #ffff;
  padding: 0px 170px;

  button {
    margin-right: 50px;
    border: none;
    background: none;
    color: #ffff;
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
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
  }

  .section {
    display: flex;
    justify-content: space-between;
    align-item: baseline;
    height: 120px;
  }
  h2 {
    font-weight: lighter;
  }
  h2 span,
  h5 {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.3);
  }
  h5 {
    margin-bottom: 10px;
  }
  img {
    margin-left: 2rem;
    width: 300px;
    animation: spin infinite linear 20s;
  }

  .destination-wrapper {
    margin-top: 160px;
    display: flex;
    flex-direction: column;
  }

  .current-destination {
    font-size: 4.5rem;
    font-weight: 200;
    margin: 0;
    animation: curmove 2s;
  }

  @keyframes curmove {
    from {
      margin-left: 50px;
    }
    to {
      margin: 0;
    }
  }

  .destination-bar {
    display: flex;
    margin-top: 70px;
    margin-right: 105px;
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
    animation: dis-tim-move 2s;
  }
  @keyframes dis-tim-move {
    from {
      margin-bottom: 30px;
    }
    to {
      margin-bottom: 0px;
    }
  }

  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @media (max-width: 768px) {
    background-image: url (${mobileBackground});
    margin-top: -80px;
    padding: 0px 16px;

    br {
      display: none;
    }
    button {
      margin-inline: 20px;
      margin-top: 230px;
    }
    @keyframes butmove {
      from {
        margin-inline: 10px;
      }
      to {
        margin-inline: 20px;
      }
    }
    h5 {
      margin: 0;
    }
    img {
      width: 200px;
      margin-left: -100px;
      position: absolute;
      top: 17%;
      left: 50%;
    }
    .section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: fit-content;
    }

    .destination-wrapper {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      margin: 100px auto 0 auto;
      flex-direction: column;
      text-align: center;
    }
    .destination-card {
      justify-content: center;
      overflow-y: scroll;
    }
    .destination-bar {
      display: flex;
      justify-content: space-evenly;
      margin: auto;
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
      margin: 0;
    }

    .hr {
      // display: none;
      width: 20.5rem;
      height: 0;
      border-bottom: solid 1px rgba(255, 255, 255, 0.3);
      margin: 30px auto 20px auto;
    }
    .time-distance {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 0;
    }
    .distance {
      margin-bottom: 20px;
    }
  }
`;
