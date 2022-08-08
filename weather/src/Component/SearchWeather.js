import React, { useState } from "react";
import "./css/SearchWeather.css";
import ShowDetails from "./showDetails";
import Time from "./Time";
export default function SearchWeather() {
  const [search, setSearch] = useState("");
  const [Data, setData] = useState({
    city_name: "",
    temp: "",
    max_temp: "",
    min_temp: "",
    humidity: "",
    description: "",
    country_name: "",
  });
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const day = weekday[d.getDay()];
  const month = d.toLocaleString("default", { month: "long" });
  const date = d.getDate();
  const year = d.getFullYear();

  const changeHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const clickHandler = async () => {
    if (search.length === 0) {
      return alert("Pleaee enter city name");
    }
    if (search.trim().length <= 2) {
      return alert("city name is too short");
    }
    if (Number(search)) {
      return alert("invalid city name");
    }
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8cb9504afe76769750e424ba11fd47f7`
    );
    // console.log(response);
    if (response.ok===false) {
      return alert("city not found");
    }
    const data = await response.json();
    
    setData({
      city_name: data.name,
      temp: data.main.temp,
      max_temp: data.main.temp_max,
      min_temp: data.main.temp_min,
      humidity: data.main.humidity,
      description: data.weather[0].description,

      country_name: data.sys.country,
    });

    // }
    setSearch("");
  };
  return (
    <>
      <div className="day">
        {day},&nbsp;{month}&nbsp;{date},&nbsp;{year},&nbsp;
        <Time />
      </div>
      <section className="box">
        <input
          type="search"
          placeholder="Search"
          className="weather"
          value={search}
          onChange={changeHandler}
        />
        <button className="btn btn-primary" onClick={clickHandler}>
          Search
        </button>
      </section>
      <ShowDetails data={Data} />
      {/* {notFoundError ? <h2>No data</h2> : <ShowDetails data={Data} />} */}
    </>
  );
}
