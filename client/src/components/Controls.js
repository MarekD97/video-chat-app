import React, { useContext, useState } from "react";
import styles from "./Controls.module.css";

import {
  BiMicrophone,
  BiMicrophoneOff,
  BiVideo,
  BiVideoOff,
  BiPhone,
  BiShareAlt,
} from "react-icons/bi";
import { SocketContext } from "../context/SocketContext";

const Controls = () => {
  const { myId, leaveCall, myCameraRef } = useContext(SocketContext);

  const [microphoneEnabled, setMicrophoneEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  const handleVideoSwitch = () => {
    const stream = myCameraRef.current.srcObject;
    stream.getVideoTracks()[0].enabled = !videoEnabled;
    setVideoEnabled((prev) => !prev);
  };
  const handleMicrophoneSwitch = () => {
    const stream = myCameraRef.current.srcObject;
    stream.getAudioTracks()[0].enabled = !microphoneEnabled;
    setMicrophoneEnabled((prev) => !prev);
  };
  const handleLeaveCall = () => leaveCall();
  const handleShareLink = () => navigator.clipboard.writeText(myId);

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
      <button className={styles["control-button"]} onClick={handleShareLink}>
        <BiShareAlt />
      </button>
    </div>
  );
};

export default Controls;
