import React, { useContext } from "react";
import { Modal } from "antd";
import { message } from "antd";
import { GlobalContext } from "../context/Context";
import RecipeService from "../service/RecipeService";

// initialFormData is used for set formData as Empty
const initialFormData = {
  recipeName: "",
  ingredients: "",
  description: "",
};

//This NewRecipeModal modal is used to add new Recipe
const NewRecipeModal = ({ open, onCancel }) => {
  const { formData, setFormData } = useContext(GlobalContext);
  const { getAllRecipes, addNewRecipe } = RecipeService();

  //This method is Used for Add new recipe
  const addNewRecipeToDatabase = async () => {
    const respons = await addNewRecipe();
    if (respons.data.message === "Recipe Add Successfull") {
      message.success("Recipe Add Successfull");
      setFormData(initialFormData);
      onCancel();
      getAllRecipes();
    } else {
      message.error("Recipe Add Unsuccessfull");
    }
  };

  const handleSave = () => {
    // Basic validation checks
    if (
      !formData.recipeName ||
      !formData.ingredients ||
      !formData.description
    ) {
      message.error("Please fill All Fields");
    } else {
      addNewRecipeToDatabase();
    }
  };

  return (
    //Modal for add New Recipe
    <Modal
      open={open}
      onCancel={onCancel}
      footer={
        <div className="flex flex-row items-end justify-end">
          <h1
            className="black_btn w-fit ml-2 cursor-pointer"
            key="ok"
            type="primary"
            onClick={onCancel}
          >
            Cancel
          </h1>
        </div>
      }
    >
      <div className="flex flex-col">
        <div className="flex text- items-center justify-center text-4xl font-bold p-2 md:mt-2 mt-8 ">
          <h1>New Recipe</h1>
        </div>
        <div className="flex flex-row justify-between mt-10 ">
          <p className="pt-2 px-0 pb-2 pl-2 mr-0 mt-0 ml-0 text-xl font-bold">
            Recipe Name :
          </p>
          <input
            placeholder="Recipe Name"
            type="text"
            value={formData.recipeName}
            onChange={(event) => {
              setFormData({
                ...formData,
                recipeName: event.target.value,
              });
            }}
            className="border placeholder-gray-400 focus:outline-none focus:border-black w-fit pt-1 px-2 pb-1 pl-2 mr-0 mt-0 ml-0 text-base block bg-opacity-40 backdrop-blur-el bg-white border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-row justify-between mt-4 ">
          <p className="pt-2 px-0 pb-2 pl-2 mr-0 mt-0 ml-0 text-xl font-bold">
            Ingredients :
          </p>
          <input
            placeholder="Add Ingredients"
            type="text"
            value={formData.ingredients}
            onChange={(event) => {
              setFormData({
                ...formData,
                ingredients: event.target.value,
              });
            }}
            className="border placeholder-gray-400 focus:outline-none focus:border-black w-fit pt-1 px-2 pb-1 pl-2 mr-0 mt-0 ml-0 text-base block bg-opacity-40 backdrop-blur-el bg-white border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-row justify-between mt-4 ">
          <p className="pt-2 px-0 pb-2 pl-2 mr-0 mt-0 ml-0 text-xl font-bold">
            Description :
          </p>
          <input
            placeholder="Add Description"
            type="text"
            value={formData.description}
            onChange={(event) => {
              setFormData({
                ...formData,
                description: event.target.value,
              });
            }}
            className="border placeholder-gray-400 focus:outline-none focus:border-black w-fit pt-1 px-2 pb-1 pl-2 mr-0 mt-0 ml-0 text-base block bg-opacity-40 backdrop-blur-el bg-white border-gray-300 rounded-md"
          />
        </div>

        <div className="felx w-full">
          <button
            className="blue_btn mt-8 w-full justify-center item-center mx-auto"
            onClick={() => {
              handleSave();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NewRecipeModal;
