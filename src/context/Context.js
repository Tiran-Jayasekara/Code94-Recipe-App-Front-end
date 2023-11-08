import React from "react";
import { createContext, useState } from "react";

// This GlobalContext is used to pass data through files without props
export const GlobalContext = createContext();

//This initialFormData is Used for make formData data as empty
const initialFormData = {
  recipeName: "",
  ingredients: "",
  description: "",
};

//This EditFormData is Used for make editFormData data as empty
const EditFormData = {
  RecipeId: "",
  recipeName: "",
  ingredients: "",
  description: "",
};

const GlobalState = ({ children }) => {
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
        setEditFormData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
