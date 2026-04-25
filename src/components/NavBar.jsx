import { Link } from "react-router";

export default function NavBar() {
  const linkClass =
    "outline-2 hover:outline-4 bg-blue-800 transition-all duration-100 p-2 rounded-xl";
  return (
    <nav className="flex gap-3 justify-center bg-gray-700 p-3">
      <Link className={linkClass} to="/">
        Home
      </Link>
      <Link className={linkClass} to="/recipes">
        Recipes
      </Link>
    </nav>
  );
}
