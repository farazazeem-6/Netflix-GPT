import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

function VideoBackground({ movieId }) {
  const [trailerKey, setTrailerKey] = useState(null);
  async function movieTrailer() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer.key);
    setTrailerKey(trailer.key);
  }
  useEffect(() => {
    movieTrailer();
  }, [movieId]);
  return (
    <div>
      {trailerKey && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerKey}?si=aK9YkjVLyHYtpuQw`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
}
export default VideoBackground;
