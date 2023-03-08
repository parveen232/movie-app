import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api_key } from "../../../config";
import './Details.css'

export default function Details() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(0)
  const img_base_url = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    requestMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestMovieDetail() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`
    );
    const data = await res.json();
    setMovieDetail(data);
  }

  return (
    <div className="movie-detail">
      <img src={img_base_url + movieDetail.poster_path} alt="{movieDetail.title}" />
      <h1>{movieDetail.title}</h1>
      <span>{movieDetail.tagline}</span>
      <h2>Overview</h2>
      <p>{movieDetail.overview}</p>
    </div>
  );
}

