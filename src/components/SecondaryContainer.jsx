import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const movies = useSelector((state) => state.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-22 relative z-50 pl-4 sm:pl-8 md:pl-12 pr-4">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Up Coming"} movies={movies.upComingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
}

export default SecondaryContainer;