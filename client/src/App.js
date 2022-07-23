import React, { useContext, useState } from "react";
import { SocketContext } from "./context/SocketContext";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const { myCameraRef, userCameraRef, stream } = useContext(SocketContext);

  return (
    <div>
      <VideoPlayer cameraRef={myCameraRef} muted />
      <VideoPlayer cameraRef={userCameraRef} />
    </div>
  );
};

export default App;
