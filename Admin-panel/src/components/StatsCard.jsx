import React from "react";

const StatsCard = ({ title, value }) => {
  return (
    <div>
      <div
        className="
    flex flex-col gap-5  bg-white p-20 rounded shadow"
      >
        {" "}
        <h2 className=" text-red-800 text-2xl text-center font-bold">
          {title}
        </h2>{" "}
        <p className="text-gray-500 text-center text-6xl font-bold">{value}</p>
      </div>{" "}
    </div>
  );
};

export default StatsCard;
