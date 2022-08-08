import React, { useState } from "react";
import Container from "./Container";
import City from "./City";
import "../css/InputBox.css";
function InputBox() {
  // usedto fetch the post office by pincode
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  // used to fetch the post office by city Name
  const [input, setInput] = useState("");
  const [resultData, setResultData] = useState([]);

  var coutn = 0;
  var count = 0;
  const onClickHandler = async () => {
    if (search.length === 0) {
      return alert("PINCODE FIELD CANNOT BE EMPTY");
    }
    if (search.trim().length !== 6) {
      return alert("PINCODE MUST BE 6 DIGITS (NUMBER)");
    }
    if (!Number(search)) {
      return alert("PINCODE MUST BE A NUMBER");
    }
    const response = await fetch(
      `https://api.postalpincode.in/pincode/${search}`
    );
    // console.log(response);

    const data = await response.json();
    if (data[0].Status === "Error") {
      const inValidPin = search;
      setSearch("");
      return alert(`${inValidPin} PINCODE NOT FOUND`);
    }
    // console.log(data);
    setResult(data);
    setSearch("");
  };

  // used to fetch the post office by city Name

  const onCitySearch = async () => {
    if (input.length === 0) {
      return alert("CITY FIELD CANNOT BE EMPTY");
    }
    if (input.trim().length < 3) {
      return alert("CITY NAME SHOULD BE > 3 CHARACTERS");
    }
    if (Number(input)) {
      return alert("CITY NAME CANNOT BE A NUMBER");
    }
    const Response = await fetch(
      `https://api.postalpincode.in/postoffice/${input}`
    );
    // console.log(Response);
    const data = await Response.json();
    if (data[0].Status === "Error") {
      const inValidCity = input;
      setInput("");
      return alert(`${inValidCity} CITY NOT FOUND`);
    }
    // console.log(data);
    setResultData(data);
    setInput("");
  };

  return (
    <>
      <div className="together">
        <div className="container-fluid">
          <input
            type="search"
            placeholder="Search Pincode"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-primary" onClick={onClickHandler}>
            Search
          </button>
          {result.flatMap((o) =>
            o.PostOffice.map(
              (o) => (
                coutn++,
                (
                  <Container
                    Name={o.Name}
                    Block={o.Block}
                    Circle={o.Circle}
                    Country={o.Country}
                    District={o.District}
                    Division={o.Division}
                    Region={o.Region}
                    State={o.State}
                    pin={o.Pincode}
                  />
                )
              )
            )
          )}
        </div>
        <div className="card card-count">
          <div className="card-body card-text">
            <p>Total Postal Location by Zip : {coutn}</p>
          </div>
        </div>
        {/* ------------------------------------------------------ */}
        <div className="wrapper">
          <input
            type="search"
            placeholder="Search City"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-primary" onClick={onCitySearch}>
            Search
          </button>
          {resultData.flatMap((o) =>
            o.PostOffice.map(
              (o) => (
                count++,
                (
                  <City
                    Name={o.Name}
                    Circle={o.Circle}
                    Country={o.Country}
                    District={o.District}
                    Division={o.Division}
                    Region={o.Region}
                    State={o.State}
                    pin={o.Pincode}
                  />
                )
              )
            )
          )}
        </div>
        <div className="card card-count-city">
          <div className="card-body card-text">
            <p>Total Postal Location by City : {count} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputBox;
