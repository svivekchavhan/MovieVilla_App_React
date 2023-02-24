import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// apiKey = dae3f1fd

const API_URL = "http://www.omdbapi.com/?apikey=dae3f1fd";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Thor");
  }, []);

  return (
    <div className="app">
      <h1>MovieVila</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) =>setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="searchicon" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movie Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
