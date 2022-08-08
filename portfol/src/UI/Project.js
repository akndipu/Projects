import React from "react";
import "./Project.css";
import Res from "../UI/Images/Resume.jpeg";
import QR2 from "../UI/Images/MyWeb.jpeg";
// import externallink from "../UI/Images/externallink.png";
// import git from "../UI/Images/GITHUB_git.png";
function Project() {
  return (
    <>
      <div className="content-wrapper ">
        <section className="sec1">
          {/* -------------------------------------------------------------------- */}
          <span className="pro-sec-1">
            <section className="pro-space">
              <div className="card-body card-text">
                <span className="frontend p1">My Portfolio</span>
                <p>Tech Stack used : React.js, Bootstrap, Email.js</p>

                <span className="demo-link">
                  <a className="link" href="">
                    Demo
                  </a>
                </span>
                <span className="demo-link">
                  <a className="link" href="">
                    Github
                  </a>
                </span>
              </div>
              {/* <img src={web1} class="card-img-top" alt="..." /> */}
            </section>
            <section className="pro-space">
              <div className="card-body card-text">
                <span className="frontend p1">Weather Web App</span>
                <p>Tech Stack used : React.js, Bootstrap</p>

                <span className="demo-link">
                  <a className="link" href="https://akn-weather.netlify.app/">
                    Demo
                  </a>
                </span>
                <span className="demo-link">
                  <a className="link" href="">
                    Github
                  </a>
                </span>
              </div>
              {/* <img src={web1} class="card-img-top" alt="..." /> */}
            </section>
          </span>
          {/* ------------------------------------------------------------------------- */}
          <span className="pro-sec-1">
            <section className="pro-space">
              <div className="card-body card-text">
                <span className="frontend p1">Zip code Locator</span>
                <p>Tech Stack used : React.js</p>

                <span className="demo-link">
                  <a className="link" href="https://akn-zipcode.netlify.app/">
                    Demo
                  </a>
                </span>
                <span className="demo-link">
                  <a className="link" href="">
                    Github
                  </a>
                </span>
              </div>
              {/* <img src={web1} class="card-img-top" alt="..." /> */}
            </section>
            <section className="pro-space">
              <div className="card-body card-text">
                <span className="frontend p1">Win Lose</span>
                <p>Tech Stack used : Node.js</p>

                <span className="demo-link">
                  <a
                    className="link"
                    href="https://replit.com/@asishnayak/a-nodejs-quiz-app?embed=true/"
                  >
                    Demo
                  </a>
                </span>
                <span className="demo-link">
                  <a className="link" href="">
                    Github
                  </a>
                </span>
              </div>
            </section>
          </span>
          {/* -------------------------------------------------------------------------- */}
          <span className="pro-sec-1">
            <section className="pro-space">
              <div className="card-body card-text">
                <span className="frontend p1">Location Tracker</span>
                <p>Tech stack used : Android Studio, java</p>
                {/* <span className="demo-link">
                  <a className="link" href="">
                    Demo
                  </a>
                </span> */}
                <span className="demo-link ">
                  <a className="link" href="">
                    Github
                  </a>
                </span>
              </div>
            </section>
            <section className="pro-space">
              <div className="card-body card-text project-card">
                <span className="frontend p1">Image Generator</span>
                <p>Tech Stack used : React.js, tailwind CSS</p>

                <span className="demo-link">
                  <a className="link" href="https://akn-img-gen.netlify.app/">
                    Demo
                  </a>
                </span>
                <span className="demo-link">
                  <a className="link" href="">
                    Github
                  </a>
                </span>
              </div>

              {/* <img src={web1} class="card-img-top" alt="..." /> */}
            </section>
          </span>

          {/* <span className="pro-sec-1">
            4
            <section className="pro-space">
              <div className="card-body card-text project-card">
                <span className="frontend">The world is Your's</span>
                <p>Provide Real Time Information of any places  in React.js</p>
              </div>

              
              <div className="card-body card-text"></div>
            </section>
            <section className="pro-space">
              <div className="card-body card-text project-card">
                <span className="frontend">CrazY</span>
                <p>Intersting facts you can find to become crazy about life in React.js</p>
              </div>

              
              <div className="card-body card-text"></div>
            </section>
          </span> */}
        </section>

        {/* IMAGE SECTION */}

        <section className="sec2">
          <img src={Res} alt="" className="project-img" />
        </section>
      </div>
      {/* <section class="separator"></section> */}
    </>
  );
}

export default Project;
