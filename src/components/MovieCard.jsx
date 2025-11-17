import React from "react";
import { IMG_CDN_URL } from "../utils/Image";

function MovieCard({ posterPath }) {
  return (
    <div className="w-48">
      <img
        className="w-screen h-[250px]"
        src={IMG_CDN_URL + posterPath}
        alt=""
      />
    </div>
  );
}

export default MovieCard;
