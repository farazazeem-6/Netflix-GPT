import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

function usePopularMovies() {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_OPTIONS
    );
    let json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
}

export default usePopularMovies;
