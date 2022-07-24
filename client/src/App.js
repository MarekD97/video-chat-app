import React, { useContext } from "react";

import { SocketContext } from "./context/SocketContext";
import VideoPlayer from "./components/VideoPlayer";
import Controls from "./components/Controls";

import Box from "@mui/material/Box";

import "./styles.css";

const App = () => {
  const { myCameraRef, userCameraRef, stream } = useContext(SocketContext);

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Box flex={1}>
        <VideoPlayer cameraRef={myCameraRef} muted />
        <VideoPlayer cameraRef={userCameraRef} />
      </Box>
      <div>
        <Controls />
      </div>
    </Box>
  );
};

export default App;
