import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieListContext } from "./MovieListContext";

export default function MovieList() {
  const [movies, setMovies] = useContext(MovieListContext);

  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
}
