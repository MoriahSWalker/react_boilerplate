import React from "react";
import "./nav.css";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";

const Nav = () => {
  return (
    <nav>
      <a href="#contact">Contact</a>
      <span>|</span>
      <a
        href="https://www.linkedin.com/in/moriah-walker-893725259/"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/MoriahSWalker" target="_blank">
        <FaGithubAlt />
      </a>
    </nav>
  );
};

export default Nav;
