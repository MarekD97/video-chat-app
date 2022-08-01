import React, { useContext, useEffect } from "react";

import Navbar from "../components/Navbar";
import Controls from "../components/Controls";
import VideoPlayer from "../components/VideoPlayer";
import TextInput from "../components/TextInput";
import TextChat from "../components/TextChat";

import { SocketContext } from "../context/SocketContext";

import styles from "./Room.module.css";

const Room = () => {
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
