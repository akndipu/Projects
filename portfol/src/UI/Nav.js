
import Logo from '../UI/Images/Logo.png';
import "./Nav.css";
import Clock from './Clock';
export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  navbar-fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Logo} className='mylogo' alt="my-logo"/>
          </a>
          <span><Clock/></span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-hamberger-icon"></span>
          </button>
        
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#project"
                >
                  Project
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#skill">
                  Skill
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#work">
                  Work Experience
                </a>
              </li>

              <li className="nav-item ">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
