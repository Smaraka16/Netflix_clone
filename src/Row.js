import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const base_Url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    // const url="https://newsapi.org/v2/everything?q=Apple&from=2022-02-23&sortBy=popularity&apiKey=73a83dbb286f4540b3957dbeeaa8b2c2"
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "rowposter__Large"}`}
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
