import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Recipes from "./components/Recipes";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </>
  );
}
