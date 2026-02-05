import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { API_HEADER } from "../utils/apiHeader";

function useNowPlayingMovies() {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    let data = await fetch(`${API_HEADER}now_playing?&page=1`, API_OPTIONS);
    let json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  });
}

export default useNowPlayingMovies;
