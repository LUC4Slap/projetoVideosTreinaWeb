import React, { useRef, useEffect, useState } from "react";
import { TimeService } from "../data/services/TimeService";

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
  const video = _selectedVideo;
  const videoRef = useRef();
  const progressTimer = useRef();
  const [isPlaying, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener("play", play);
    videoElement.addEventListener("pause", pause);
    videoElement.addEventListener("seeked", onProgress);
    setTime(0);
    pause();

    return () => {
      videoElement.removeEventListener("play", play);
      videoElement.removeEventListener("pause", pause);
      videoElement.removeEventListener("seeked", onProgress);
    };
  }, [video]);

  useEffect(() => {
    clearInterval(progressTimer.current);
    if (isPlaying) {
      progressTimer.current = setInterval(onProgress, 1000);
    }
  }, [isPlaying]);

  function play() {
    videoRef.current.play();
    setPlay(true);
  }

  function pause() {
    videoRef.current.pause();
    setPlay(false);
  }

  function onProgress() {
    setProgress(videoRef.current.currentTime);
  }

  function onChangeProgress(event) {
    setTime(event.target.value);
  }

  function setTime(time) {
    videoRef.current.currentTime = time;
    onProgress();
  }

  return (
    <div className="video-player">
      <video src={video.url} ref={videoRef} />
      {video.url && (
        <>
          <div className="controls">
            <button onClick={isPlaying ? pause : play}>
              {isPlaying ? "||" : "|>"}
            </button>
            <span>
              {TimeService.formatTime(Math.round(progress))} /{" "}
              {TimeService.formatTime(video.duration)}
            </span>
            <input
              type="range"
              value={progress}
              onChange={onChangeProgress}
              min={0}
              max={video.duration}
              step={0.1}
            />
          </div>
          <h2>{video.title}</h2>
        </>
      )}
    </div>
  );
}
