import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

const Browse = () => {
  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  }
  return (
    <div className="bg-black/50 w-full">
      <Header />
      <div className="flex justify-end mx-8">
        <button onClick={handleSignOut} className="bg-red-600 text-white rounded my-4 py-2 px-3 cursor-pointer">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browse;
