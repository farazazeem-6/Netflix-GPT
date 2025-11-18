import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { HeroImg } from "../utils/Image";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={HeroImg} alt="" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
