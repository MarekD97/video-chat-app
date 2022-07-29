import React, { useContext, useEffect } from "react";

import { SocketContext } from "../context/SocketContext";
import VideoPlayer from "../components/VideoPlayer";
import Controls from "../components/Controls";

import Box from "@mui/material/Box";

import CallUser from "./CallUser";
import AnswerCall from "./AnswerCall";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const {
    myCameraRef,
    userCameraRef,
    stream,
    callUser,
    myId,
    answerCall,
    setStream,
    callAccepted,
    callEnded,
    call,
  } = useContext(SocketContext);

  useEffect(() => {
    // get the current camera stream from the device
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myCameraRef.current.srcObject = currentStream;
      });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      {/* <Box
        flex={1}
        display="flex"
        flexDirection="column"
        backgroundColor="primary.dark"
      >
        <Box position="absolute" width="12em" right={0} padding="1em">
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
      </Box> */}
      <div style={{ flex: 1 }}></div>
      <Controls />
    </div>
  );
};

export default Home;
