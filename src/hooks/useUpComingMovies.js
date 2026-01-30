import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

function useUpComingMovies() {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      API_OPTIONS,
    );
    let json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    getUpComingMovies();
  });
}

export default useUpComingMovies;
