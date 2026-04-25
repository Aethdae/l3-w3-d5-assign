import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import RecipeChooser from "./RecipeChooser";
import RecipeCard from "./RecipeCard";

export default function Recipes() {
  const [recipes, setRecipes] = useState({});
  const [error, setError] = useState("");
  const [recipeOptions, setRecipeOptions] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState("");
  const [recipeMap, setRecipeMap] = useState(new Map());
  const [recipeToRender, setRecipeToRender] = useState({});

  useEffect(() => {
    async function getRecipes() {
      const res = await fetch("https://dummyjson.com/recipes");
      if (!res.ok) {
        setError(`Error fetching recipes: ${res.status}`);
      }
      const data = await res.json();
      setRecipes(data);
    }
    getRecipes();
  }, []);

  //recipe doesn't even look like a word anymore
  useEffect(() => {
    function recipeUpdate() {
      if (!recipes.recipes) {
        return;
      }
      const updateRecipes = recipes.recipes?.map((recipe) => {
        return recipe.name;
      });
      setRecipeOptions(updateRecipes);
    }
    recipeUpdate();
  }, [recipes]);

  useEffect(() => {
    function createRecipeMap() {
      if (!recipes.recipes) {
        return;
      }
      const recipeMap = new Map();
      recipes.recipes?.forEach((recipe) => {
        recipeMap.set(recipe.name, recipe.id);
      });
      setRecipeMap(recipeMap);
    }
    createRecipeMap();
  }, [recipes]);

  useEffect(() => {
    function selectRecipeToRender() {
      if (!recipes.recipes) {
        return;
      }
      const [render] = recipes.recipes?.filter((recipe) => {
        return recipe.id === recipeMap.get(currentRecipe);
      });
      setRecipeToRender(render);
    }
    selectRecipeToRender();
  }, [currentRecipe]);

  return (
    <div>
      <NavBar pageName={"Recipes"} />
      {error && <p>{error}</p>}
      {recipeOptions && (
        <RecipeChooser
          setCurrentRecipe={setCurrentRecipe}
          recipeOptions={recipeOptions}
        />
      )}

      {recipeToRender?.name && <RecipeCard recipe={recipeToRender} />}
      <Footer />
    </div>
  );
}
