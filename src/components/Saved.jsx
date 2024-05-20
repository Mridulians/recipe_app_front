// import React from 'react'
import { useContext } from "react";
import { AppContext } from "../context/App_Context";
import FetchRecipeById from "./FetchRecipeById";

const Saved = () => {
  const { savedRecipe } = useContext(AppContext);

  // console.log("Mridul" , savedRecipe);
  // Check if recipe is an array before mapping
  if (!Array.isArray(savedRecipe)) {
    // console.error("Recipe is not an array:", savedRecipe);
    return null;
  }

  return (
    <>
      <div className="card_container">
        {savedRecipe.map((data) => (
          <div className="card_modi" key={data._id}>
            {/* Accessing _id property */}
            <FetchRecipeById id={data.recipe} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Saved;
