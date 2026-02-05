import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { API_HEADER } from "../utils/apiHeader";

function useUpComingMovies() {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    let data = await fetch(`${API_HEADER}upcoming?&page=1`, API_OPTIONS);
    let json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    getUpComingMovies();
  });
}

export default useUpComingMovies;
