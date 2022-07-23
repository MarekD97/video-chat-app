import React, { useContext, useEffect } from "react";
import { SocketContext } from "../context/SocketContext";

const VideoPlayer = ({ cameraRef, muted = false }) => {
  return (
    <div>
      <video
        style={{ padding: "0.5em", backgroundColor: "yellow" }}
        playsInline
        muted={muted}
        ref={cameraRef}
        width="640"
        height="480"
        autoPlay
      ></video>
    </div>
  );
};

export default VideoPlayer;
