import React from "react";
// import Character from "./3D_Character";
import webdev from "../UI/Images/webdev.png";
import "./Header.css";
import Paragraph from "./Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Typed from "react-typed";
import dipu from "../UI/Images/dipu.jpg";
function Header() {
  const element = <FontAwesomeIcon icon={faCoffee} className="coffee" />;

 

  return (
    <>
      <div className="header">
        <section className="main-info">
          <span className="image">
            <img src={dipu} className="img-blur" alt="asish" />
          </span>

          <span className="intro">
            <h4>
              {element} <span className="about-name">Hey ! I am </span>
              <span className="Asish">&nbsp;Asish Kumar</span>
            </h4>
            <Typed
              className="text"
              strings={["Software Engineer", "Web Designer ", "Web Developer"]}
              typeSpeed={65}
              backSpeed={70}
              loop
            />
            <button  type="button" className="btn btn-success btn-lg">
              <a href={require("../Docs/Updated_Resume.docx")} download="Asish">
                Resume
              </a>
            </button>
            
          </span>
        </section>
      </div>
      {/* <section classname="separator"></section> */}
    </>
  );
}

export default Header;
