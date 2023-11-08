import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

const RecipeDetails = () => {
  //Get selectRecipeData from context.js file, that inside context folder
  const { selectRecipeData } = useContext(GlobalContext);
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="bg-white bg-opacity-70 w-auto md:p-10 p-4 items-center mb-10 justify-center mt-10 rounded-xl md:mx-40 mx-10">
          <div className="justify-center text-center text-4xl font-bold mb-6">
            <h1>Recipe Details</h1>
          </div>
          <div className="flex flex-row justify-center ">
            <h1 className="m-4 text-xl font-bold">Recipe Name : </h1>
            <h1 className="m-4 text-xl">{selectRecipeData.recipeName}</h1>
          </div>
          <div className="flex flex-row justify-center">
            <h1 className="m-4 text-xl font-bold">Ingredients : </h1>
            <h1 className="m-4 text-xl flex-1">
              {selectRecipeData.ingredients}
            </h1>
          </div>
          <div className="flex flex-row  justify-center">
            <h1 className="m-4 text-xl font-bold flex">Description : </h1>
            <h1 className="m-4 w-ful flex-1 text-xl">
              {selectRecipeData.description}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
