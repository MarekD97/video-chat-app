import React, { useContext, useEffect } from "react";

import { SocketContext } from "./context/SocketContext";
import VideoPlayer from "./components/VideoPlayer";
import Controls from "./components/Controls";

import Box from "@mui/material/Box";

import "./styles.css";
import CallUser from "./pages/CallUser";
import AnswerCall from "./pages/AnswerCall";

const App = () => {
  const {
    myCameraRef,
    userCameraRef,
    stream,
    callUser,
    myId,
    answerCall,
    callAccepted,
    callEnded,
    call,
  } = useContext(SocketContext);

  console.log(call);

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      backgroundColor="primary.dark"
    >
      <Box position="absolute" width="35%" right={0} padding="1em">
        <VideoPlayer cameraRef={myCameraRef} muted rounded />
      </Box>
      <VideoPlayer cameraRef={userCameraRef} />
      {!callAccepted && !call.isReceivedCall && (
        <Box
          position="absolute"
          display="flex"
          width="100%"
          height="100vh"
          top={0}
          justifyContent="center"
          alignItems="center"
        >
          <CallUser />
        </Box>
      )}
      {call.isReceivedCall && !callAccepted && (
        <Box
          position="absolute"
          display="flex"
          width="100%"
          height="100vh"
          top={0}
          justifyContent="center"
          alignItems="center"
        >
          <AnswerCall />
        </Box>
      )}
      {callAccepted && !callEnded && (
        <Box position="absolute" bottom={0} width="100%">
          <Controls />
        </Box>
      )}
    </Box>
  );
};

export default App;
