import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieList.css";

const MovieList = ({movies}) => {
  console.log(movies);
  return (
    <div className="movie-list">
      {movies.map((movie) => {
        return <MovieCard movie={movie} className="movie-card" />;
      })}
    </div>
  );
}

export default MovieList
