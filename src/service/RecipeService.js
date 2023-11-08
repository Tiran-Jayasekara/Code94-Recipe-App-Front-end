import { useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../context/Context";

const RecipeService = () => {
  const { setRecipes, formData, editFormData } = useContext(GlobalContext);

  const http = axios.create({
    baseURL: "http://localhost:3001",
    // process.env.REACT_APP_BASE_URL,

    headers: {
      "Content-type": "application/json",
    },
  });

  //Http Request For Get All Recipes Data
  const getAllRecipes = async () => {
    try {
      const allRecipes = await http.get("/recipe/allRecipe");

      if (allRecipes && allRecipes.data && allRecipes.data.allRecipes) {
        //Pass Featch data to SetRecipes State
        setRecipes(allRecipes.data.allRecipes);
      } else {
        console.log("Data featch error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Add new Recipe Method
  const addNewRecipe = async () => {
    try {
      const addNewRecipe = await http.post("/recipe/addRecipe", formData);
      if (addNewRecipe) {
        return addNewRecipe;
      } else {
        return "Data Add Unsuccess";
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Http Request For Delete Recipe By Id
  const deleteRecipe = async (id) => {
    try {
      const deleteRecipe = await http.delete("/recipe/deleteRecipe/" + id);
      if (deleteRecipe) {
        return deleteRecipe;
      } else {
        console.log("unsuccess");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //This method is used for Update Recipe Data
  const editRecipe = async () => {
    try {
      const editRecipe = await http.put("/recipe/updateRecipe", editFormData);

      if (editRecipe) {
        return editRecipe;
      } else {
        console.log(editRecipe);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAllRecipes,
    deleteRecipe,
    addNewRecipe,
    editRecipe,
  };
};

export default RecipeService;
