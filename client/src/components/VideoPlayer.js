import React from "react";

const VideoPlayer = ({ cameraRef, muted = false }) => {
  return (
    <div>
      <video
        style={{ padding: "0.5em", backgroundColor: "yellow" }}
        playsInline
        muted={muted}
        width="100%"
        ref={cameraRef}
        autoPlay
      ></video>
    </div>
  );
};

export default VideoPlayer;
