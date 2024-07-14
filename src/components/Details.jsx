import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

function Details() {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, handleAddToFavorite, favoriteList } =
    useContext(GlobalContext);
  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=936599c2-0127-451e-babb-a0664a149d08`
        );
        const data = await response.json();
        console.log(data);
        if (data?.data) {
          setRecipeDetails(data?.data?.recipe);
        }
      } catch (e) {
        console.log(e.message);
      }
    }

    getRecipeDetails();
  }, []);
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetails?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetails?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetails?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetails)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoriteList &&
            favoriteList.length > 0 &&
            favoriteList.findIndex(
              (index) => index.id === recipeDetails?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetails?.ingredients.map((item) => (
              <li>
                <span className="text-2xl font-semibold text-black">
                  {item.quantity} {item.unit}
                </span>
                <span className="text-2xl font-semibold text-black mx-2">
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
