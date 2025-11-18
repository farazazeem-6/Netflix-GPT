function VideoTitle({ title, overview }) {
  return (
    <div className="w-full h-screen absolute top-0 left-0 flex flex-col justify-center px-12 text-white bg-linear-to-r from-black via-black/50 to-transparent">
      <h1 className="text-6xl font-bold mb-4 mt-32">{title}</h1>
      <p className="text-lg w-1/3 mb-6">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white py-2 px-6 text-black font-semibold cursor-pointer rounded hover:bg-opacity-80 flex items-center gap-2">
          <i className="ri-play-fill text-xl"></i>
          Play
        </button>
        <button className="bg-gray-500 bg-opacity-70 py-2 px-6 text-white font-semibold cursor-pointer rounded hover:bg-opacity-50 flex items-center gap-2">
          <i className="ri-information-line text-xl"></i>
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
