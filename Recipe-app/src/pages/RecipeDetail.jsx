import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/Globalcontext";
import { FaHeart } from "react-icons/fa";

export default function RecipeDetails() {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, handleFavoritesList, favoriteList } =
    useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);

      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        const data = await res.json();
        setRecipeDetails(data.meals[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchDetails();
  }, [id, setRecipeDetails]);
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!recipeDetails) return null;
  const isFavorite = favoriteList?.some(
    (item) => item.idMeal === recipeDetails.idMeal,
  );

  return (
    <div className="container mx-auto px-6 py-8 grid md:grid-cols-2 gap-8">
      <img
        src={recipeDetails.strMealThumb}
        alt={recipeDetails.strMeal}
        className="rounded-xl shadow-lg"
      />
      <div>
        <div className="flex gap-10">
          <h1 className="text-3xl font-bold mb-2">{recipeDetails.strMeal}</h1>{" "}
          <button
            onClick={() => handleFavoritesList(recipeDetails)}
            className="flex gap-4 bg-black text-white text-center rounded px-2 py-2 hover:scale-105"
          >
            <FaHeart className={isFavorite ? "text-red-500" : "text-white"} />
            <p className="text-sm">
              {isFavorite ? "Remove Favorite" : "Add to Favorite"}
            </p>
          </button>
        </div>
        <p className="text-gray-500 mb-4">
          {recipeDetails.strArea} • {recipeDetails.strCategory}
        </p>{" "}
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700 leading-relaxed">
          {console.log()}
          {recipeDetails.strInstructions}
        </p>
      </div>
    </div>
  );
}
