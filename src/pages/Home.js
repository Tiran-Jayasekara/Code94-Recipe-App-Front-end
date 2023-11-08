import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/Context";
import RecipeService from "../service/RecipeService";
import { message } from "antd";
import NewRecipeModal from "../components/NewRecipeModal";
import DeleteModal from "../components/DeleteModal";

const Home = () => {
  const navigate = useNavigate();
  const [deleteModal, setdeleteModal] = useState(false);
  const [addRecipe, setAddRecipe] = useState(false);
  const [deleteRecipeId, setDeleteRecipeId] = useState();
  const { getAllRecipes, deleteRecipe } = RecipeService();

  // eslint-disable-next-line
  useEffect(() => {
    //Get All recipes from RecipeService
    getAllRecipes();
    // eslint-disable-next-line
  }, []);

  const { recipes, setSelectRecipeData, setEditFormData } =
    useContext(GlobalContext);

  // This Method is used for find delete Recipe id
  const DeleteRecipeId = (e) => {
    setDeleteRecipeId(e._id);
    setdeleteModal(true);
  };

  //This method is used for Delete Recipe
  const DeleteRecipe = async () => {
    const deleteRecipeResponseData = await deleteRecipe(deleteRecipeId);
    setdeleteModal(false);
    getAllRecipes();

    if (deleteRecipeResponseData.data.message === "Recipe Delete Successfull") {
      message.success("Recipe Delete Successfull");
    } else {
      message.error("Recipe Delete Unsuccessfull");
    }
  };

  // used for set setEditFormData state
  const EditFormData = (e) => {
    setEditFormData({
      RecipeId: e._id,
      recipeName: e.recipeName,
      ingredients: e.ingredients,
      description: e.description,
    });
    navigate("/updateRecipe");
    // updateModal();
  };

  //this method is used for set the state of Add recipe modal
  const addRecipeModal = () => {
    setAddRecipe((prevState) => !prevState);
  };

  //this method is used for set the state of delete modal
  const deleteModalState = () => {
    setdeleteModal((prevState) => !prevState);
  };

  // Used for set Selected recipe data
  const selectedRecipeData = (e) => {
    setSelectRecipeData(e);
    navigate("/recipeDetails");
  };

  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <div className="flex justify-end items-center m-10 cursor-pointer">
          <h1
            className="black_btn w-fit justify-center items-center mr-4"
            onClick={addRecipeModal}
          >
            Add a Recipe
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center head_text orange_gradient">
          <h1 className="mb-10">Code94 Recipes</h1>
        </div>

        <div className="flex flex-wrap justify-center mx-10">
          {/* Map all Recipe Data */}
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-60 w-80 m-4 rounded-xl p-6 cursor-pointer hover:scale-110"
            >
              <h1
                className="item-center justify-center text-center text-4xl font-bold"
                onClick={() => {
                  selectedRecipeData(recipe);
                }}
              >
                {recipe.recipeName}
              </h1>

              <div className="flex flex-row mt-10">
                <div
                  className="blue_btn mx-auto cursor-pointer"
                  onClick={() => {
                    EditFormData(recipe);
                  }}
                >
                  Update
                </div>
                <div
                  className="black_btn cursor-pointer items-center justify-center mx-auto"
                  onClick={() => {
                    DeleteRecipeId(recipe);
                  }}
                >
                  Delete
                </div>

                {/* This is Delete Button Modal */}
              </div>
            </div>
          ))}

          {/* This is the modal of Add a New Recipe */}
          <NewRecipeModal open={addRecipe} onCancel={addRecipeModal} />

          {/* This is the modal of Delete Recipe */}
          <DeleteModal
            open={deleteModal}
            onCancel={deleteModalState}
            DeleteRecipe={DeleteRecipe}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
