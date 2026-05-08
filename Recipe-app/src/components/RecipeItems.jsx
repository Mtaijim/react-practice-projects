import { Link } from "react-router-dom";

export default function RecipeItems({ item }) {
  return (
    <div className="border rounded p-2 w-64 flex ">
      <Link to={`/recipe/${item?.idMeal}`}>
        {" "}
        <div>
          <img
            src={item?.strMealThumb}
            alt="recipeitem"
            className="rounded shadow-black shadow-sm hover:scale-105 duration-300 "
          />
          <div className=" text-blue-800 mt-2 font-sm text-center">
            <p> {item?.strMeal} </p>
            <p className="text-sm text-gray-500">
              {item.strArea} • {item.strCategory}
            </p>
          </div>

          <div className=" bg-black text-white px-2 py-2 rounded m-2 hover:scale-105 duration-300">
            <span> Recipe details</span>
          </div>
        </div>{" "}
      </Link>
    </div>
  );
}
