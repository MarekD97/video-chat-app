import React from "react";
import { SocketContextProvider } from "./context/SocketContext";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <SocketContextProvider>
      <VideoPlayer />
    </SocketContextProvider>
  );
};

export default App;
