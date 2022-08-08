import React from "react";
import "./Work.css";
import workspace from "../UI/Images/workspace.jpg";
function Work() {
  return (
    <>
      <div className="wrap">
        <section className="Work-Experience">
          <img src={workspace} className="img-fluid" alt="" />
          
        </section>
        {/* <section className="Vertical-line"></section> */}
        <section className="Work-Experience">
          
          <span className="experience  text-truncate">
            ServiceNow Developer at <span className="company-1">Allianz Technology SE</span> . <br />
            > Responsible to Build Dashboards and Reports using PA.
            <br />
            > Responsible to Design Catalog Item creation and Workflow.
          </span>
          <span className="experience  text-wrap">
            I also Worked as Web Developer intern at <span className="company-2">Bitibe Technolgy</span>.
            <br />
            > Responsible for developing CRUD API to manage user info. <br/> > Designed Landing Pages with flexbox functionality.
          </span>
         
        </section>
      </div>
    </>
  );
}

export default Work;
