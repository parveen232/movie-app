import FetchMovies from "../../../FetchMovies";
import "../Home.css";

export default function Popular() {
  return <FetchMovies category="popular" />;
}