import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

const Browse = () => {
  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // navigate("/error");
      });
  }
  return (
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
  );
};

export default Browse;
