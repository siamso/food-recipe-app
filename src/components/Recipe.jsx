import React from "react";
import { Link } from "react-router-dom";

function Recipe({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img className="block w-full" src={item?.image_url} alt={item?.title} />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.title}
        </h3>
        <Link
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
          to={`/recipe-item/${item?.id}`}
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}

export default Recipe;
