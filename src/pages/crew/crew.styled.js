import styled from "styled-components";
import desktopBackground from "./background-crew-desktop.jpg";

export const CrewStyle = styled.div`
  background-image: url(${desktopBackground});
  background-position: center 80%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  overflow-y: hidden;

  margin-top: -110px;
  color: #ffff;
  h1 {
    margin: 10px 0 20px 0;
    font-size: 50px;
  }
  }
  h2 {
    font-weight: lighter;
  }
  h2 span{
    font-weight: bold;
    color: rgba(255, 255, 255, 0.3);
  }
    p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
  }
  img {
    width: 21.8rem;
    position: absolute;
    bottom: 0%;
    right: 20%;
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
    margin-top: 160px;
    padding: 0px 170px;
  }
  .crew-card {
    display: flex;
    justify-content: space-between;
  }

  .crew-side {
    display: flex;
    flex-direction: column;
  }
  .crew-banner {
    margin-bottom: 90px;
  }

  .crew-bar {
    display: flex;
    margin-top: 50px;
  }
  .crew-bar > * {
    margin-inline: 5px;
    width: 12px;
    color: rgba(255, 255, 255, 0.3);
`;
