import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Netflix_Logo from "../../public/Netflix_Logo.png";
import { addGptToggle } from "../store/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLang } from "../store/languageSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.isGpt);
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // console.log("Logout successful");
      })
      .catch((error) => {
        // console.error("Logout error:", error);
      });
  };

  function handleGptSearchComp() {
    dispatch(addGptToggle());
  }
  function handleLanguageChange(e) {
    dispatch(changeLang(e.target.value));
  }

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-2 bg-linear-to-b from-black to-transparent z-50 flex justify-between items-center">
      <img className="w-44" src={Netflix_Logo} alt="Netflix_Logo" />

      {user && (
        <div className="flex items-center gap-4">
          {showGptSearch && (
            <select
              className="bg-gray-800 text-white rounded-md py-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.name} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearchComp}
            className="text-white rounded-lg bg-pink-700 text-sm font-semibold px-4 py-2 cursor-pointer hover:bg-pink-800"
          >
            {showGptSearch ? "Home Page" : "Gpt Search"}
          </button>
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
