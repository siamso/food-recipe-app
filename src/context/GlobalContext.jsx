import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=936599c2-0127-451e-babb-a0664a149d08`
      );

      const dataItem = await response.json();
      if (dataItem) {
        setLoading(false);
        setRecipeData(dataItem?.data?.recipes);
        setSearchParam("");
        navigate("/");
        console.log(recipeData);
      }
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    }
  };

  const handleAddToFavorite = (getCurrentId) => {
    let cpyFavoriteList = [...favoriteList];
    const index = cpyFavoriteList.findIndex(
      (index) => index.id === getCurrentId.id
    );

    if (index === -1) {
      cpyFavoriteList.push(getCurrentId);
    } else {
      cpyFavoriteList.splice(index);
    }

    setFavoriteList(cpyFavoriteList);
  };
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeData,
        recipeDetails,
        setRecipeDetails,
        favoriteList,
        handleAddToFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
