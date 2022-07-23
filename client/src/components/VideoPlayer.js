import React, { useContext, useEffect } from "react";
import { SocketContext } from "../context/SocketContext";

const VideoPlayer = () => {
  const { myCameraRef, stream } = useContext(SocketContext);

  return (
    <div>
      <video
        style={{ padding: "0.5em", backgroundColor: "yellow" }}
        playsInline
        muted
        ref={myCameraRef}
        width="640"
        height="480"
        autoPlay
      ></video>
    </div>
  );
};

export default VideoPlayer;
