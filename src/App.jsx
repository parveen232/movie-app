import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import NowPlaying from "./Pages/Home/NowPlaying/NowPlaying";
import Popular from "./Pages/Home/Popular/Popular";
import TopRated from "./Pages/Home/TopRated/TopRated";
import Upcoming from "./Pages/Home/Upcoming/Upcoming";
import MyList from "./Pages/MyList/MyList";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mylist" element={<MyList />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/now_playing" element={<NowPlaying />} />
            <Route path="/upcoming" element={<Upcoming /> } />
            <Route path="/top_rated" element={<TopRated />} />
            <Route path="/movie/:movieId" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
