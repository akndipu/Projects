
import "./Skill.css";

function Skill() {
  return (
    <>
      <div className="container-fluid wrapper1">
        <section className="front card">
          <div className="card-body card-text">
            <span className="frontend">FrontEnd</span>
          </div>
          {/* <img src={web1} class="card-img-top" alt="..." /> */}
          <div className="card-body card-text">
            <span className="web html">HTML5</span>
            <span className="web css">CSS3</span>
            <span className="web js">JavaScript</span>
            <span className="web react">React.js</span>
          </div>
        </section>
        <section className="Back card">
          <div className="card-body card-text">
            <span className="frontend">BackEnd</span>
          </div>
          {/* <img src={web2} class="card-img-top" alt="..." /> */}
          <div className="card-body card-text">
            <span className="web mongo">mongoDB</span>
            <span className="web express">Express.js</span>
            <span className="web node">Node.js</span>
            <span className="web sql">MySql</span>
          </div>
        </section>
        <section className="Tool card">
          <div className="card-body card-text">
            <span className="frontend">Tools</span>
          </div>
          {/* <img src={web3} class="card-img-top" alt="..." /> */}
          <div className="card-body card-text">
            <span className="web selenium">Selenium</span>
            <span className="web git">Git & GitHub</span>
            <span className="web servicenow">ServiceNow</span>
          </div>
        </section>
        <section className="Language card">
          <div className="card-body card-text">
            <span className="frontend">Others</span>
          </div>
          {/* <img src={web4} class="card-img-top" alt="..." /> */}
          <div className="card-body card-text">
          
            <span className="web python">Python</span>
            <span className="web powerpoint">Powerpoint</span>
            <span className="web photos">Word</span>
          </div>
        </section>
      </div>
    </>
  );
}

export default Skill;
