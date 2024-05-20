/* eslint-disable react/prop-types */
// import React from 'react'
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/App_Context";
import { Link, useLocation , useNavigate } from "react-router-dom";

const FetchRecipeById = ({ id }) => {
  const location = useLocation();

  const navigate = useNavigate();

  const { getRecipeById } = useContext(AppContext);

  const [recipe, setRecipe] = useState("");


  useEffect(() => {
    const recipeById = async (id) => {
      const result = await getRecipeById(id);
      // console.log("ME" , result)
      setRecipe(result.data.recipe);
    };

    recipeById(id);
  }, [id , getRecipeById]);

  // console.log(recipe , "MRIDUL GUPTA")

  const toggleDetails = () => {
    // setShowDetails((prevShowDetails) => !prevShowDetails);
    navigate(`/${id}`);
  };

  return (
    <div className="details">
      <div className="details_img" onClick={toggleDetails}>
        <img src={recipe?.imgUrl} alt="" />

        <h2 className="details_title">{recipe?.title}</h2>
      </div>

      {(location.pathname !== "/saved") && (
        <>
          {" "}
          <div className="desc">
            <div className="ingredients">
              <h2>
                {recipe.ing1} - {recipe.qnt1}
              </h2>
              <h2>
                {recipe.ing2} - {recipe.qnt2}
              </h2>
              <h2>
                {recipe.ing3} - {recipe.qnt3}
              </h2>
              <h2>
                {recipe.ing4} - {recipe.qnt4}
              </h2>
            </div>
            <div className="instructions">
              <p>{recipe.inst}</p>
            </div>
          </div>
          <Link to="/" className="btn btn-primary text-center">
            Back Home
          </Link>
        </>
      )}

      
    </div>
  );
};

export default FetchRecipeById;
