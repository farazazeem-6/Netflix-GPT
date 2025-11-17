import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Netflix_Logo from "../../public/Netflix_Logo.png";

const Header = () => {
  const user = useSelector((store) => store.user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // console.log("Logout successful");
      })
      .catch((error) => {
        // console.error("Logout error:", error);
      });
  };

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-2 bg-linear-to-b from-black to-transparent z-50 flex justify-between items-center">
      <img className="w-44" src={Netflix_Logo} alt="Netflix_Logo" />

      {user && (
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
