import maLogo from "../../assets/ma-logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={maLogo} alt="logo movie app" className="ma-logo" />
      </Link>
      <Link to="/mylist" className="f-btn">
        My List
      </Link>
      <form action="" id="search-form">
        <input type="search" name="search" id="search" placeholder="Search" />
      </form>
    </div>
  );
}
