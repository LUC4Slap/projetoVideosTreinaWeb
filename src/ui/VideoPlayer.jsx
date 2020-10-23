import React from "react";

const _selectedVideo = {
  id: 2,
  title: "Glowing Purple Grid Lines Tracking In",
  duration: 6,
  url:
    "https://www.videvo.net/videvo_files/converted/2018_05/preview/180503_02_PurpleGrid.mp455771.webm",
  cover:
    "https://images.freeimages.com/images/large-previews/241/night-fog-1521028.jpg",
};

export default function VideoPlayer() {
  const video = _selectedVideo
  return (
    <div className="video-player">
      <video src={video.url} />
      <div className="controls">
        <button></button>
        <span></span>
        <input type="range" min={0} max={video.duration} step={.1} />
      </div>
      <h2>{ video.title}</h2>
    </div>
  );
}
