import React, { useState } from "react";
import Video from "./Video";

const _list = [
  {
    id: 2,
    title: "Glowing Purple Grid Lines Tracking In",
    duration: 6,
    url:
      "https://www.videvo.net/videvo_files/converted/2018_05/preview/180503_02_PurpleGrid.mp455771.webm",
    cover:
      "https://images.freeimages.com/images/large-previews/241/night-fog-1521028.jpg",
  },
  {
    id: 3,
    title: "Earth Zoom Inn",
    duration: 6,
    url:
      "https://www.videvo.net/videvo_files/converted/2014_08/preview/Earth_Zoom_In.mov35908.webm",
    cover:
      "https://images.freeimages.com/images/large-previews/478/jack-o-lanterns-1326113.jpg",
  },
  {
    id: 4,
    title: "Hollywood Police Confrontation with Protesters",
    duration: 19,
    url:
      "https://cdn.videvo.net/videvo_files/video/free/2020-06/small_watermarked/200605_BLM%20US%20Protests_01_4k_047_preview.webm",
    cover:
      "https://images.freeimages.com/images/large-previews/24e/halloween-1563652.jpg",
  },
];

export default function VideoList(props) {
  function onClick(video) {
    console.log(video);
  }
  return (
    <ul className="list">
      {_list.map(item => (
        <Video key={item.id} onClick={onClick} video={item}  />
      ))}
    </ul>
  );
}
