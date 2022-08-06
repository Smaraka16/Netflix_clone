import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./banner.css";

function Banner() {
  const base_Url = "https://image.tmdb.org/t/p/original/";
  const [movies, setBackground] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setBackground(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log(request);
    }
    fetchMovie();
  }, []);
  console.log(movies);
  function truncate(str ,n){
      return str?.length>n ? PushSubscription(0,n-1) +"...":str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_Url}${movies?.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movies?.title || movies?.name || movies?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <h1 className="banner__description">{truncate(movies?.overview,150)}</h1>
        </div>
      </div>
      <div className='bannerFade'/>
    </header>
  );
}

export default Banner;
