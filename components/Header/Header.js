import React from "react";

// Logo
import logo from "../../assets/imgs/todo-icon.png";
import gitHublogo from "../../assets/imgs/github-logo.png";
// style
import "./header.scss";

function Header() {
  return (
    <div className=" grid ">
      <div className=" header grid wide">
        <span className="header_title">
          <img className="header_logo" src={logo} />
          <h4>Todo-App</h4>
        </span>
        <span className="header_sourcecode">
          <a href="#">
            <p>Github</p> <img className="gitLogo" src={gitHublogo} />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Header;
