import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Recipe from "./Recipe";

function Favorites() {
  const { favoriteList } = useContext(GlobalContext);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item) => <Recipe key={item?.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            No favorite recipe
          </p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
