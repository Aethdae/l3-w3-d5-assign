import { Link } from "react-router";

export default function Body() {
  return (
    <div className="flex justify-center flex-col text-center text-2xl gap-8 bg-gray-500 p-10">
      <h1 className="text-4xl">Recipe Browser</h1>
      <p>Welcome to a basic recipe browser to get ideas for what to cook.</p>
      <p>We'll go through the ingredients you need.</p>
      <div>
        <Link
          to="/recipes"
          className="outline-2 hover:outline-4 bg-orange-600 transition-all duration-100 p-2 rounded-xl"
        >
          Browse Recipes
        </Link>
      </div>
    </div>
  );
}
