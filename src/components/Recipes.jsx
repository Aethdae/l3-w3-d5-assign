import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Recipes() {
  const [recipes, setRecipes] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    async function getRecipes() {
      const res = await fetch("https://dummyjson.com/recipes");
      if (!res.ok) {
        setError(`Error fetching recipes: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      setRecipes(data);
    }
    getRecipes();
  }, []);

  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  );
}
