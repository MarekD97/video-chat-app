import React, { useContext, useEffect } from "react";

import Navbar from "../components/Navbar";
import Controls from "../components/Controls";
import VideoPlayer from "../components/VideoPlayer";
import TextInput from "../components/TextInput";

import { SocketContext } from "../context/SocketContext";

import styles from "./Room.module.css";

const Room = () => {
  const { myId, setName, callUser, call, answerCall, callAccepted } =
    useContext(SocketContext);

  useEffect(() => {
    console.log(myId);
    setName("Ktoś");
  }, [myId]);

  return (
    <div className={styles["container"]}>
      <Navbar />
      <div className={styles["content"]}>
        <div className={styles["video-chat"]}>
          <VideoPlayer />
          <Controls />
        </div>
        <div className={styles["text-chat"]}>
          <div>
            {/* <button onClick={() => callUser(myId)}>CallUser</button>
          {call.isReceivedCall && !callAccepted && (
            <button onClick={() => answerCall()}>AnswerCall</button>
          )} */}
          </div>
          <TextInput />
        </div>
      </div>
    </div>
  );
};

export default Room;
