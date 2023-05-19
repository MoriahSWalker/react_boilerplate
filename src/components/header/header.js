import React from "react";
import "./header.css";
import { BsArrowDownShort } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <h3>
        Hi, I'm<span>Moriah</span>
      </h3>
      <h1>Web Developer, UI/UX Designer & Software Engineer</h1>
      <button>
        About Me <BsArrowDownShort />{" "}
      </button>
    </div>
  );
};

export default Header;
