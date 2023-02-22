import React from "react";
import { NavLink } from "react-router-dom";
import { Headerstyle } from "./Navbar.styled";
import styled from "styled-components";

const Logostyle = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
`;

const Logo = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48
      "
        height="48"
      >
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
    </>
  );
};
const Navbar = () => {
  return (
    <Headerstyle>
      <div className="header-wrapper">
        <Logostyle>
          <Logo />
        </Logostyle>
        <div className="hr"></div>
        <div className="nav">
          <ul>
            <li>
              <NavLink to="/">
                <b>00</b> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="destination">
                <b>01</b> Destination
              </NavLink>
            </li>
            <li>
              <NavLink to="crew">
                <b>02</b> Crew
              </NavLink>
            </li>
            <li>
              <NavLink to="technology">
                <b>03</b> Technology
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Headerstyle>
  );
};
export default Navbar;
