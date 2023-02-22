import styled from "styled-components";
import desktopBackground from "./background-destination-desktop.jpg";

export const Destinationstyle = styled.div`
  background-image: url(${desktopBackground});
  background-size: cover;
  background-repeat: "no-repeat";
  height: 100vh;
  overflow-y: hidden;
  margin-top: -110px;
  color: #ffff;
  padding: 0px 170px;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
  }
  .destination-wrapper {
    margin-top: 160px;
    display: flex;
    flex-direction: column;
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
  button {
    margin-right: 50px;
    border: none;
    background: none;
    color: #ffff;
    padding-bottom: 10px;
  }
  button:focus {
    border-bottom: solid 3px #ffff;
  }
  button:hover {
    border-bottom: solid 3px rgba(255, 255, 255, 0.5);
  }
  .current-destination {
    font-size: 4.5rem;
    font-weight: 200;
    margin: 0;
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

  img {
    margin-left: 2rem;
    width: 300px;
    animation: spin infinite linear 20s;
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
  h5 {
    margin-bottom: 10px;
  }
`;
