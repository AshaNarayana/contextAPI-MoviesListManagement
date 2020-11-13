import React, { useContext } from "react";

import { MovieListContext } from "./MovieListContext";
export default function Navbar() {
  const [movies] = useContext(MovieListContext);
  return (
    <div className="navbar">
      <h3>Movie List Project</h3>
      <p>List of Movies:{movies.length} </p>
    </div>
  );
}
