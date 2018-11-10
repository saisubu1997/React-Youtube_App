import React from "react";
import "../Style/style.css";

const videolistitems = ({ video, onVideoSelect }) => {
  const imageURL = video.snippet.thumbnails.default.url;
  //  const video = props.video (or use) {video} //ES6
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};
export default videolistitems;
