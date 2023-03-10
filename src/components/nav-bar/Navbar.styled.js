import styled from "styled-components";

export const Headerstyle = styled.header`
  padding: 25px;
  padding-right: 0;
  position: absolute;
  width: 100%;

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .hr {
    width: 26rem;
    height: 0;
    border-bottom: solid 1px rgba(255, 255, 255, 0.3);
    margin-block: auto;
    margin-left: 9rem;
    z-index: 10;
    position: absolute;
    top: 45%;
  }
  // }
  .nav {
    background-color: rgba(255, 255, 255, 0.1);

    height: 60px;
    // margin-right: 100px;
    padding-top: 1.5rem;
    width: 51rem;
  }
  ul {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-right: 3rem;
  }

  li {
    list-style-type: none;
    margin-right: 50px;
  }
  a {
    text-decoration: none;
    color: #ffff;
    padding: 0 0 1rem 0;
    font-style: normal;
    font-weight: 400;
    // font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
  a.active {
    border-bottom: solid 3px #ffff;
  }
  a:hover {
    border-bottom: solid 3px rgba(255, 255, 255, 0.5);
  }
  .logo {
    width: 38px;
  }
  .menu,
  .close {
    display: none;
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    position: absolute;
    top: 0%;
    padding: 0;
    a {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
    }
    .hr {
      display: none;
    }
    .nav {
      display: none;
      height: 100vh;
      width: 70%;
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(25px);
      padding: 25px 40px;
      transition: all 0.3s ease-in;
      // transform: translateX(100%);
      z-index: 10;
    }
    ul {
      flex-direction: column;
      margin: 90px 0 0 0;
    }
    li {
      margin: 16px 0;
    }
    .logo {
      width: 35px;
      margin: 16px;
    }

    .close {
      display: block;
      float: right;
      cursor: pointer;
    }
    .menu {
      display: block;
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
    }
    .active {
      display: block;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    b {
      display: none;
    }
    a {
      padding: 0 0 1.7rem 0;
      line-height: 10px;
      letter-spacing: 1.4px;
    }

    .hr {
      display: none;
    }
    .nav {
      width: 30rem;
      height: 80px;
      padding-top: 2rem;
    }
    ul {
      margin-right: 0;
      justify-content: flex-end;
    }
    li {
      margin-right: 20px;
    }
  }
`;
