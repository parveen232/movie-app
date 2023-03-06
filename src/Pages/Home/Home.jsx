import { useState, useEffect } from "react";
import { api_key } from "../../../config";

export default function Home() {
  const [movies, setMovies] = useState([]);

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
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}
