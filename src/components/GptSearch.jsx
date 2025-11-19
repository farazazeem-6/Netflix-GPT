import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { HeroImg } from "../utils/Image";

const GptSearch = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed -z-10 w-full h-full">
        <img className="w-full h-full object-cover" src={HeroImg} alt="" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;