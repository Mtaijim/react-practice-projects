import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, Setcity] = useState("");

  function handleClick(e) {
    e.preventDefault();
    onSearch(city);
    Setcity("");
  }

  return (
    <div className="SearchBar-container flex justify-center items-center m-4 gap-4">
      <div className="">
        <input
          className="border focus:outline-none focus:ring-2 focus:ring-blue-500 font-black rounded-4xl px-6 py-1"
          type="text"
          name="Search"
          placeholder="Search city"
          value={city}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleClick(e);
          }}
          onChange={(e) => {
            Setcity(e.target.value);
          }}
        />
      </div>
      <div>
        {" "}
        <button
          onClick={handleClick}
          className="bg-black text-white px-4 py-1 rounded-4xl hover:bg-gray-900 transition "
        >
          {" "}
          search
        </button>
      </div>
    </div>
  );
}
