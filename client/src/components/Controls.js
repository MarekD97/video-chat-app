import React, { useContext, useState } from "react";
import styles from "./Controls.module.css";

import {
  BiMicrophone,
  BiMicrophoneOff,
  BiVideo,
  BiVideoOff,
  BiPhone,
} from "react-icons/bi";
import { SocketContext } from "../context/SocketContext";

const Controls = () => {
  const { leaveCall } = useContext(SocketContext);

  const [microphoneEnabled, setMicrophoneEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  const handleVideoSwitch = () => setVideoEnabled((prev) => !prev);
  const handleMicrophoneSwitch = () => setMicrophoneEnabled((prev) => !prev);
  const handleLeaveCall = () => leaveCall();

  return (
    <div className={styles["container"]}>
      <button
        className={styles["control-button"]}
        onClick={handleMicrophoneSwitch}
      >
        {microphoneEnabled ? <BiMicrophone /> : <BiMicrophoneOff />}
      </button>
      <button className={styles["control-button"]} onClick={handleVideoSwitch}>
        {videoEnabled ? <BiVideo /> : <BiVideoOff />}
      </button>
      <button
        className={[styles["control-button"], styles["red"]].join(" ")}
        onClick={handleLeaveCall}
      >
        <BiPhone />
      </button>
    </div>
  );
};

export default Controls;
