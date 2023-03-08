import { Link } from "react-router-dom";

export default function Home() {
  return (
      <div className="home-category">
        <Link to="/popular">Popular</Link>
        <Link to="/now_playing">Now PLaying</Link>
        <Link to="/top_rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
  );
}
