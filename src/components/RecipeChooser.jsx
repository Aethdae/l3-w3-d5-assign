export default function RecipeChooser({ setCurrentRecipe, recipeOptions }) {
  return (
    <div className="flex flex-col items-center m-3">
      <h2 className="text-white text-2xl">Choose a recipe!</h2>
      <label>
        <select
          className="bg-gray-200 rounded-sm p-1 m-3"
          onChange={(e) => {
            setCurrentRecipe(e.target.value);
          }}
          name="recipeSelector"
          id="recipeSelector"
        >
          <option value="0">Choose a recipe...</option>
          {recipeOptions &&
            recipeOptions.map((name) => {
              return (
                <option value={name} key={name}>
                  {name}
                </option>
              );
            })}
        </select>
      </label>
    </div>
  );
}
