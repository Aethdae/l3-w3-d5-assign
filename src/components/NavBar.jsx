import { Link } from "react-router";

export default function NavBar({ pageName }) {
  const linkClass =
    "outline-2 hover:outline-4 bg-blue-800 transition-all duration-100 p-2 text-white rounded-xl";
  return (
    <div className="flex gap-3 justify-around bg-gray-700 items-center">
      <div>
        <h2 className="text-2xl w-100 bg-gray-800 text-center rounded-2xl p-3 text-amber-600">
          {pageName}
        </h2>
      </div>
      <div className="">
        <nav className="flex gap-3 justify-center bg-gray-700 p-3">
          <Link className={linkClass} to="/">
            Home
          </Link>
          <Link className={linkClass} to="/recipes">
            Recipes
          </Link>
        </nav>
      </div>
    </div>
  );
}
