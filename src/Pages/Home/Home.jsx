import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api_key } from "../../../config";
import "./Home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const img_base_url = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    requestMovies();
  }, []);

  async function requestMovies() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    );
    const data = await res.json();
    setMovies(data.results);
  }

  return (
    <>
      <h1>Popular Movies</h1>
      <ul className="movies-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-container">
            <Link to={`/${movie.id}`}>
              <img src={img_base_url + movie.poster_path} alt="{movie.title}" />
              <div className="overlay"></div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
