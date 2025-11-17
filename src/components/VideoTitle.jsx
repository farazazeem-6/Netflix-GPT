function VideoTitle({ title, overview }) {
  return (
    <div className="px-12 pt-22">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-2/4">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-green-50 py-2 px-8 text-black cursor-pointer rounded-lg">
          ▶ Play
        </button>
        <button className="bg-green-50 py-2 px-8 text-black cursor-pointer rounded-lg">
        <i className="ri-information-line"></i>  More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;