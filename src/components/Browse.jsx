import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  const gpt = useSelector((store) => store.gpt);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      {gpt.isGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer /> <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;