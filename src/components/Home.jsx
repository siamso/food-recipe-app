import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Recipe from "./Recipe";

function Home() {
  const { loading, recipeData } = useContext(GlobalContext);

  if (loading) {
    return <p>Loading....</p>;
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeData && recipeData.length > 0 ? (
        recipeData.map((item) => <Recipe key={item?.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
