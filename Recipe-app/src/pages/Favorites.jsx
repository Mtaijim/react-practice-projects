import { useContext } from "react";
import { GlobalContext } from "../context/Globalcontext";
import RecipeItems from "../components/RecipeItems";

export default function Favorites() {
  const { favoriteList } = useContext(GlobalContext);
  return (
    <div className="container mx-auto px-4 ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20">
        {favoriteList && favoriteList.length > 0 ? (
          favoriteList.map((items) => (
            <RecipeItems key={items.idMeal} item={items} />
          ))
        ) : (
          <div className="text-gray-300  text-3xl ">
            <p>Noting to show Add to favorite</p>
          </div>
        )}
      </div>
    </div>
  );
}
