import FetchMovies from "../../../FetchMovies";
import "../Home.css";

export default function NowPlaying() {
  return <FetchMovies category="now_playing" />;
}
