import React from "react";
import "../Style/style.css";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading.....</div>;
  }
  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;
  console.log(url);
  return (
    <div className="video-detail details">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="video-detail details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};
export default VideoDetails;
