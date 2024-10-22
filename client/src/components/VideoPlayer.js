import React, { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import styles from "./VideoPlayer.module.css";

const Video = ({ videoRef, username, muted = false }) => (
  <div className={styles["video-frame"]}>
    <video ref={videoRef} playsInline muted={muted} autoPlay />
    {username && <span className={styles["video-username"]}>{username}</span>}
  </div>
);

const VideoPlayer = () => {
  const { myCameraRef, userCameraRef, call } = useContext(SocketContext);

  return (
    <div className={styles["container"]}>
      <Video videoRef={myCameraRef} username="You" muted />
      <Video videoRef={userCameraRef} username={call.name} />
    </div>
  );
};

export default VideoPlayer;
