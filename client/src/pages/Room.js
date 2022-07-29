import React, { useContext, useEffect } from "react";

import Navbar from "../components/Navbar";
import Controls from "../components/Controls";

import styles from "./Room.module.css";
import VideoPlayer from "../components/VideoPlayer";
import { SocketContext } from "../context/SocketContext";

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
          <button onClick={() => callUser(myId)}>CallUser</button>
          {call.isReceivedCall && !callAccepted && (
            <button onClick={() => answerCall()}>AnswerCall</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Room;
