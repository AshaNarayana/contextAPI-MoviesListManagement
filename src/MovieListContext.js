import React, { useState, createContext } from "react";
export const MovieListContext = createContext();
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 12345,
    },
    {
      name: "Game Of Thrones",
      price: "$15",
      id: 22345,
    },
    {
      name: "Inception",
      price: "$20",
      id: 32345,
    },
  ]);
  return (
    <MovieListContext.Provider value={"Hello"}>
      {props.children}
    </MovieListContext.Provider>
  );
};
