import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/Context";
import { message } from "antd";
import RecipeService from "../service/RecipeService";
import { useNavigate } from "react-router-dom";

//This Function for Update Recipe
const UpdateRecipe = () => {
  const { editFormData, setEditFormData } = useContext(GlobalContext);
  const { editRecipe, getAllRecipes } = RecipeService();
  const navigate = useNavigate();

  //Validate editRecipeData
  const editRecipeData = async () => {
    if (
      !editFormData.recipeName ||
      !editFormData.ingredients ||
      !editFormData.description
    ) {
      message.error("Please fill All Fields");
    } else {
      const responce = await editRecipe();
      if (responce.data.message === "Update Success") {
        message.success("Update Successfull");
        getAllRecipes();
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        message.success("Update Unsuccessfull");
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col w-auto justify-center items-center bg-white p-10 mt-20 rounded-2xl bg-opacity-60 md:mx-60">
        <div className="flex text-4xl font-bold p-2 md:mt-2 mt-8 ">
          <h1>Update Recipe</h1>
        </div>
        <div className="flex flex-row justify-between mt-4 w-full ">
          <p className="pt-2 px-0 pb-2 pl-2 mt-0 ml-0 text-xl font-bold justify-start text-left mr-10">
            Recipe Name :
          </p>
          <input
            placeholder="Recipe Name"
            type="text"
            value={editFormData.recipeName}
            onChange={(event) => {
              setEditFormData({
                ...editFormData,
                recipeName: event.target.value,
              });
            }}
            className="border flex-1 placeholder-gray-400 focus:outline-none focus:border-black w-full pt-1 px-2 pb-1 pl-2 mr-0 mt-0 ml-0 text-base block bg-opacity-40 backdrop-blur-el bg-white border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-row justify-between mt-4 w-full ">
          <p className="pt-2 px-0 pb-2 pl-2 mt-0 ml-0 text-xl font-bold justify-start text-left mr-10">
            Ingredients :
          </p>
          <textarea
            placeholder="Add Ingredients"
            type="text"
            value={editFormData.ingredients}
            onChange={(event) => {
              setEditFormData({
                ...editFormData,
                ingredients: event.target.value,
              });
            }}
            className="border flex-1 h-full placeholder-gray-400 focus:outline-none focus:border-black w-full pt-1 px-2 pb-1 pl-2 mr-0 mt-0 ml-0 text-base block bg-opacity-40 backdrop-blur-el bg-white border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-row justify-between mt-4 w-full ">
          <p className="pt-2 px-0 pb-2 pl-2 mt-0 ml-0 text-xl font-bold justify-start text-left mr-10">
            Description :
          </p>
          <textarea
            placeholder="Add Description"
            type="text"
            value={editFormData.description}
            onChange={(event) => {
              setEditFormData({
                ...editFormData,
                description: event.target.value,
              });
            }}
            className="border flex-1 placeholder-gray-400 focus:outline-none focus:border-black w-full pt-1 px-2 pb-1 pl-2 mr-0 mt-0 ml-0 text-base block bg-opacity-40 backdrop-blur-el bg-white border-gray-300 rounded-md"
          />
        </div>

        <div className="felx w-full">
          <button
            className="blue_btn mt-8 w-full justify-center item-center mx-auto"
            onClick={() => {
              editRecipeData();
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateRecipe;
