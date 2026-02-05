import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { API_HEADER } from "../utils/apiHeader";

function useTopRatedMovies() {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    let data = await fetch(`${API_HEADER}top_rated?&page=1`, API_OPTIONS);
    let json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  });
}

export default useTopRatedMovies;
