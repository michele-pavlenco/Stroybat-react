import React from "react";
import Logo from "../img/logoStroybat.png";
import { BsBuildings } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TbMailUp } from "react-icons/tb";
import clsx from "clsx";
import useScrollspy from "../hooks/useScrollspy";

const Navigation = () => {
  const ids = ["header", "features", "portfolio", "contact"];
  const activeId = useScrollspy(ids, 100); // Adjust the offset as needed

  return (
    <div id="navbar">
      <div className="container">
        <a
          href="/#header"
          className={clsx("navlink", "logo", { "navlink-active": activeId === "header" })}
          aria-label="Home"
        >
          <img src={Logo} alt="Logo" className="nav-logo" />
          <div className="link">
            <BiHomeAlt2 />
            <p>Home</p>
          </div>
        </a>

        <a
          href="/#features"
          className={clsx("navlink", { "navlink-active": activeId === "features" })}
          aria-label="Découvrez"
        >
          <div className="link">
            <FaMagnifyingGlass />
            <p>Découvrez</p>
          </div>
        </a>

        <a
          href="/#portfolio"
          className={clsx("navlink", { "navlink-active": activeId === "portfolio" })}
          aria-label="Projets"
        >
          <div className="link">
            <BsBuildings />
            <p>Projets</p>
          </div>
        </a>

        <a
          href="/#contact"
          className={clsx("navlink", { "navlink-active": activeId === "contact" })}
          aria-label="Contacte"
        >
          <div className="link">
            <TbMailUp />
            <p>Contacte</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
