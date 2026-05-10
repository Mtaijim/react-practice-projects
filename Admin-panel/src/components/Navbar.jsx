import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow">
      <input
        type="text"
        placeholder="Search videos ...  "
        className="border w-100 border-gray-300 px-3 py-1 rounded-full"
      />
      <div className="flex items-center gap-4 ">
        🔔
        <img
          src="https://i.pravatar.cc/40"
          alt="icon"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
