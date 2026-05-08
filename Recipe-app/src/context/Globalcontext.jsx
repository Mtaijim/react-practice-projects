import { createContext, useState } from "react";

export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!searchParam.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`,
      );
      const data = await res.json();
      console.log(data?.meals);
      if (data?.meals) {
        setRecipe(data?.meals || []);
        setLoading(false);
        setSearchParam("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setRecipe([]);
    }
  }

  function handleFavoritesList(getCurrentRecipe) {
    console.log(getCurrentRecipe);
    let cpyFavorlist = [...favoriteList];
    const index = cpyFavorlist.findIndex(
      (item) => item.idMeal === getCurrentRecipe.idMeal,
    );
    if (index === -1) {
      cpyFavorlist.push(getCurrentRecipe);
    } else {
      cpyFavorlist.splice(index, 1);
    }
    setFavoriteList(cpyFavorlist);
  }
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipe,
        recipeDetails,
        setRecipeDetails,
        handleFavoritesList,
        favoriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
