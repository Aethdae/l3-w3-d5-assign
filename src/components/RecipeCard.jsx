export default function RecipeCard({ recipe }) {
  return (
    <div className="flex justify-center">
      <div
        className="text-white m-4 max-w-400 bg-gray-600 p-8 rounded-2xl outline-white outline-4"
        id="recipeCard"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl drop-shadow-xl/100 drop-shadow-black font-extrabold">
            {recipe.name}
          </h2>
          <img
            className="w-60 border-black rounded-xl border-4"
            src={recipe.image}
            alt={`${recipe.name}`}
          />
        </div>
        <div className="flex justify-end gap-6 text-xl">
          <p>Servings: {recipe.servings}</p>
          <p>Rating: {recipe.rating}</p>
        </div>
        <hr></hr>
        <h3 className="text-2xl font-bold text-shadow-lg text-center py-3 text-shadow-black">
          Ingredients
        </h3>
        <ul>
          {recipe.ingredients?.map((ingred) => {
            return (
              <li className="text-lg" key={ingred}>
                {ingred}
              </li>
            );
          })}
        </ul>
        <h3 className="text-2xl font-bold text-shadow-lg text-center py-3 text-shadow-black">
          Instructions
        </h3>
        <ul>
          {recipe.instructions?.map((instruction, i) => {
            return (
              <li key={instruction}>
                {i + 1}. {instruction}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
