import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/Globalcontext";
import { FaHamburger, FaHome, FaHeart } from "react-icons/fa";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-8 px-4">
      {/* <Link to="/">Food-recipe </Link> */}
      <h2 className="text-2xl font-semibold">
        <NavLink
          to="/"
          className="text-black flex items-center justify-center gap-2"
        >
          <FaHamburger className="text-black" /> Food Recipe
        </NavLink>
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Search"
          placeholder="Search Recipe....."
          value={searchParam}
          onChange={(event) => {
            setSearchParam(event.target.value);
          }}
          className="bg-gray-100 p-3 px-8 rounded-full outline-none lg:w-250  focus:border-black border-0.5  shadow-sm focus:shadow-black"
        />
      </form>
      <ul className="flex  gap-4 p-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `flex items-center gap-2
              ${isActive ? "text-black font-extrabold  " : "text-gray-500"}`}
          >
            <FaHome size={20} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-black font-extrabold  " : "text-gray-500"
              } `
            }
          >
            <FaHeart size={20} />
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
