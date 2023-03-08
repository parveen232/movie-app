import FetchMovies from "../../../FetchMovies";
import "../Home.css";

export default function TopRated() {
  return <FetchMovies category="top_rated" />;
}
