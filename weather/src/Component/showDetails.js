import React from "react";
import "./css/ShowDetails.css";
import NoData from "./NoData";
function ShowDetails(props) {
  const city=props.data.city_name;
  const temp=props.data.temp;
  const max_temp=props.data.max_temp;
  const min_temp=props.data.min_temp;
  const humidity=props.data.humidity;
  const description=props.data.description;
  const country=props.data.country_name;
 
  return (
    <>
      <div className="wrap">
     
        <section className="card card-1">
          {/* <img src={web1} class="card-img-top" alt="..." /> */}
          <div className="card-body card-text">
            <span className="cloud">City</span>
            <span className="webapp">{city}</span>
          </div>
        </section>
        <section className="card card-2">
          <div className="card-body card-text">
            <span className="cloud">Country</span>
            <span className="webapp">{country}</span>
          </div>
        </section>

        <section className="card card-3">
          <div className="card-body card-text">
            <span className="cloud">Temp &#8451;</span>
            <span className="webapp">{temp}</span>
          </div>
        </section>

        <section className="card card-4">
          <div className="card-body card-text">
            <span className="cloud">Max_Temp &#8451;</span>
            <span className="webapp">{max_temp}</span>
          </div>
        </section>

        <section className="card card-5">
          <div className="card-body card-text">
            <span className="cloud">Min_Temp &#8451;</span>
            <span className="webapp">{min_temp}</span>
          </div>
        </section>

        <section className="card card-6">
          <div className="card-body card-text">
            <span className="cloud">Humidity %</span>
            <span className="webapp">{humidity}</span>
          </div>
        </section>

        <section className="card card-7">
          <div className="card-body card-text">
            <span className="cloud">Weather</span>
            <span className="webapp">{description}</span>
          </div>
        </section>
      </div>
    </>
  );
}

export default ShowDetails;
