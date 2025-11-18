import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pt-5">
      <h1 className="text-white text-2xl">{title}</h1>
      <div className="flex">
        <div className="flex overflow-x-scroll pt-5 hide-scrollbar">
          <div className="flex gap-2">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
