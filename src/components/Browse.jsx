import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // navigate("/error");
      });
  }
  useNowPlayingMovies();
  return (
    <div>
      <div className="bg-linear-to-b from-black">
        <Header />
        <div className="flex justify-end mx-8">
          <button
            onClick={handleSignOut}
            className="bg-red-700 text-white rounded my-4 py-1 px-2 cursor-pointer text-[14px] hover:bg-red-800"
          >
            Sign Out
          </button>
        </div>
      </div>
      <div>
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;