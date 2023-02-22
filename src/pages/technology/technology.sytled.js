import styled from "styled-components";
import desktopBackground from "./background-technology-desktop.jpg";

export const TechnologyStyle = styled.div`
  background-image: url(${desktopBackground});
  color: #ffff;
  background-repeat: "no-repeat";
  height: 100vh;
  overflow-y: hidden;
  margin-top: -110px;
  color: #ffff;
  padding: 0px 0 0 170px;
  button {
    background: none;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: #ffff;
    width: 45px;
    height: 45px;
    margin-bottom: 50px;
  }
    
  button:focus {
    background-color: #ffff;
      color: #0b0d17;

  }
  button:hover {
       border: 1px solid rgba(255, 255, 255, 0.9);

  }
  h1{
        margin: 5px 0 10px 0;

  }
  h2 {
    margin-bottom: 120px;
    display: inline;
    font-weight: lighter;
}
  h2 span{
    font-weight: bold;
    color: rgba(255, 255, 255, 0.3);
  }
  h6 {
    display: inline;
    mar
  }
  img {
    display: inline;
    margin-bottom: 100px;
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
    margin-top: 160px;
  }

  .technology-bar {
    display: flex;
    flex-direction: column;
    margin-top: 120px;
  }
  .technology-card {
    display: flex;
    // justify-content: space-between;
  }
  .technology-side {
    margin-top: 120px;
    margin-right: 240px;
  }
`;
