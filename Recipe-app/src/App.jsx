import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import RecipeDetail from "./pages/RecipeDetail";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="flex m-4 font-semibold text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </div>
  );
}
