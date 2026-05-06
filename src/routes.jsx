import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/favorites" element={<Favorites />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesApp;
