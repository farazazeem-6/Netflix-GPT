import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { API_HEADER } from "../utils/apiHeader";

function usePopularMovies() {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    let data = await fetch(`${API_HEADER}popular?&page=1`, API_OPTIONS);
    let json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  });
}

export default usePopularMovies;
