import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Headerstyle } from "./Navbar.styled";
import logo from "./logo.svg";
import menu from "./icon-hamburger.svg";
import close from "./icon-close.svg";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handleClickOuts = (event) => {
      if (showNav && ref.current && !ref.current.contains(event.target)) {
        setShowNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOuts);
    return () => {
      document.removeEventListener("mousedown", handleClickOuts);
    };
  }, [showNav]);

  return (
    <Headerstyle>
      <div className="header-wrapper">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="hr"></div>
        <div className={`nav ${showNav && "active"}`} ref={ref}>
          <>
            <img
              src={close}
              alt="close"
              className="close"
              onClick={() => setShowNav(!showNav)}
            />
          </>
          <ul>
            <li>
              <NavLink to="/">
                <b>00</b> HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="destination">
                <b>01</b> DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink to="crew">
                <b>02</b> CREW
              </NavLink>
            </li>
            <li>
              <NavLink to="technology">
                <b>03</b> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </div>
        <>
          <img
            src={menu}
            alt="hamburger menu "
            className=" menu "
            onClick={() => setShowNav(!showNav)}
          />
        </>
      </div>
    </Headerstyle>
  );
};
export default Navbar;
