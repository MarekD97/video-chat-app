import React from "react";

const VideoPlayer = ({ cameraRef, muted = false, rounded = false }) => {
  const videoStyle = {
    aspectRatio: "1/1",
    objectFit: "cover",
    borderRadius: "50%",
    border: "0.25em solid white",
  };
  return (
    <video
      playsInline
      muted={muted}
      width="100%"
      style={rounded ? videoStyle : { height: "100%", objectFit: "cover" }}
      ref={cameraRef}
      autoPlay
    ></video>
  );
};

export default VideoPlayer;
