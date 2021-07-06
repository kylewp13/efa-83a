import React, { useEffect, useState } from "react";

const baseURL = "https://api.nasa.gov/planetary/earth/assets";
const today = new Date();
const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const Nasa = (props) => {
  const [picture, setPicture] = useState("");

  console.log("NASA", props)

  let lat = 42.3601;
  let lon = 71.0589;

  const fetchPicture = () => {
    const url = `${baseURL}?lon=${lon}&lat=${lat}&date=${date}&&dim=.2&api_key=${process.env.REACT_APP_NASA_API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPicture(data.url));
  };

  useEffect(() => {
    fetchPicture();
    console.log(picture)
  }, [props]);

  return (
    <div className="container">
      <h1>NASA Satellite Image</h1>
      <img className="imgBody" src={picture} alt="satellite" />
    </div>
  );
};

export default Nasa;
