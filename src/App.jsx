import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
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
            <Route path="/movies" element={<Movies />} />
            <Route path="/mylist" element={<MyList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
