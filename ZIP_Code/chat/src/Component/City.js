import React from "react";

function City(props) {
  return (
    <>
      <section className="section-content">
        <div className="card">
          <div className="card-body card-text">
            <p>Name : {props.Name}</p>
            
            <p>Circle : {props.Circle}</p>
            <p>Zip : {props.pin}</p>
            
            <p>District : {props.District}</p>
            <p>Division : {props.Division}</p>
            <p>Region : {props.Region}</p>
            <p>State : {props.State}</p>
            <p>Counry : {props.Country}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default City;
