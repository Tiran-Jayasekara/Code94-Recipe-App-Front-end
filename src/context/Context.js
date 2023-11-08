import React from "react";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const initialFormData = {
  recipeName: "",
  ingredients: "",
  description: "",
};

const EditFormData = {
  RecipeId:"",
  recipeName: "",
  ingredients: "",
  description: "",
};

const GlobalState = ({ children }) => {
  
  const [visible, setVisible] = useState(false);
  const [addRecipe, setAddRecipe] = useState(false);

  const [formData, setFormData] = useState(initialFormData);
  const [editFormData, setEditFormData] = useState(EditFormData);
  const [recipes, setRecipes] = useState([]);
  const [selectRecipeData, setSelectRecipeData] = useState("");
  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        setRecipes,
        recipes,
        selectRecipeData,
        setSelectRecipeData,
        editFormData,
        setEditFormData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
