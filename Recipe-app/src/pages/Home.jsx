import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalcontext";
import RecipeItems from "../components/RecipeItems";

const Home = () => {
  const { loading, recipe } = useContext(GlobalContext);
  if (loading) return <h2> loading.....</h2>;
  return (
    <div className="container mx-auto px-4 ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20">
        {recipe && recipe.length > 0 ? (
          recipe.map((items) => <RecipeItems key={items.idMeal} item={items} />)
        ) : (
          <div className="text-gray-300  text-3xl ">
            <p>Noting to show please search ....</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
