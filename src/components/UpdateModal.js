import React from "react";
import { Modal } from "antd";
import { message } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../context/Context";
import RecipeService from "../service/RecipeService";

// This UpdateModal is used to Update recipe data
const UpdateModal = ({ open, onCancel, getAllRecipes }) => {
  const { editRecipe } = RecipeService();
  const { editFormData, setEditFormData } = useContext(GlobalContext);

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
        onCancel();
      } else {
        message.success("Update Unsuccessfull");
      }
    }
  };
  return (
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
          <h1>Update Recipe</h1>
        </div>
        <div className="flex flex-row justify-between mt-10 ">
          <p className="pt-2 px-0 pb-2 pl-2 mr-0 mt-0 ml-0 text-xl font-bold">
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
            value={editFormData.ingredients}
            onChange={(event) => {
              setEditFormData({
                ...editFormData,
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
            value={editFormData.description}
            onChange={(event) => {
              setEditFormData({
                ...editFormData,
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
              editRecipeData();
            }}
          >
            Update
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UpdateModal;
