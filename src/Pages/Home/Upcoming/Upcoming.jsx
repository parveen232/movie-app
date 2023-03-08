import FetchMovies from "../../../FetchMovies";
import "../Home.css";

export default function Upcoming() {
  return <FetchMovies category="upcoming" />;
}
