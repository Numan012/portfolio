import React, { useRef, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.svg";
import underline from "../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-21rem";
  };

  return (
    <>
      <div className="navbar">
        <img src={logo} alt="Portfolio" />
        <LuMenu
          style={{ width: "3rem", height: "3rem", cursor: "pointer" }}
          className="nav-menu-open"
          onClick={openMenu}
        />
        <ul className="nav-menu" ref={menuRef}>
          <RxCross2
            style={{ width: "2rem", height: "2rem", cursor: "pointer" }}
            className="nav-menu-close"
            onClick={closeMenu}
          />
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#home">
              <p onClick={() => setMenu("home")}>
                Home
                {menu === "home" ? (
                  <img src={underline} alt="underline" />
                ) : (
                  <></>
                )}
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("about")}>
                About
                {menu === "about" ? (
                  <img src={underline} alt="underline" />
                ) : (
                  <></>
                )}
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#services">
              <p onClick={() => setMenu("services")}>
                Services
                {menu === "services" ? (
                  <img src={underline} alt="underline" />
                ) : (
                  <></>
                )}
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#work">
              <p onClick={() => setMenu("work")}>
                Portfolio
                {menu === "work" ? (
                  <img src={underline} alt="underline" />
                ) : (
                  <></>
                )}
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => setMenu("contact")}>
                Contact
                {menu === "contact" ? (
                  <img src={underline} alt="underline" />
                ) : (
                  <></>
                )}
              </p>
            </AnchorLink>
          </li>
        </ul>
        <div className="nav-contact">
          <AnchorLink className="anchor-link" offset={50} href="#footer">
            Connect with me
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
