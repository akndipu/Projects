import React from "react";
import './css/NoData.css';
function NoData(props) {
  return (
    <>
      <div className="wrap">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">No Data Found</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoData;
