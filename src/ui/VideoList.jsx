import React, { useContext } from "react";
import Video from "./Video";
import { videoStore } from '../data/video/VideoContext'

const _list = [
  
];

export default function VideoList(props) {
  const [videoState, videoDispatch] = useContext(videoStore)
  function onClick(video) {
    videoDispatch({
      type: 'select',
      value: video
    })
  }
  return (
    <ul className="list">
      {videoState.videos.map(item => (
        <Video key={item.id} onClick={onClick} video={item}  />
      ))}
    </ul>
  );
}
