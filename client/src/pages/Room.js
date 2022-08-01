import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Controls from "../components/Controls";
import VideoPlayer from "../components/VideoPlayer";
import TextInput from "../components/TextInput";
import TextChat from "../components/TextChat";

import { SocketContext } from "../context/SocketContext";

import styles from "./Room.module.css";

const Room = () => {
  const { roomId } = useParams();
  const { myId, callUser, answerCall, call, myCameraRef, setStream } =
    useContext(SocketContext);

  useEffect(() => {
    // get the current camera stream from the device
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myCameraRef.current.srcObject = currentStream;
      });
    if (roomId !== myId) callUser(roomId);
  }, []);

  useEffect(() => {
    if (call && call.isReceivedCall) answerCall();
  }, [call]);

  return (
    <div className={styles["container"]}>
      <Navbar showMenu />
      <div className={styles["content"]}>
        <div className={styles["video-chat"]}>
          <VideoPlayer />
          <Controls />
        </div>
        <div className={styles["text-chat"]}>
          <TextChat />
          <TextInput />
        </div>
      </div>
    </div>
  );
};

export default Room;
