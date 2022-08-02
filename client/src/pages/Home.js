import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";

import styles from "./Home.module.css";
import Navbar from "../components/Navbar";

const Home = () => {
  const { myId } = useContext(SocketContext);
  const navigate = useNavigate();

  const [displayJoinRoomForm, setDisplayJoinRoomForm] = useState(false);
  const [roomId, setRoomId] = useState("");

  const handleCreateRoom = () => {
    navigate(`/room/${myId}`);
  };
  const handleJoinRoom = () => setDisplayJoinRoomForm(true);
  const handleSubmitJoinRoom = (event) => {
    event.preventDefault();
    navigate(`/room/${roomId}`);
  };
  const handleRoomInput = (event) => setRoomId(event.target.value);
  const handlePaste = async (event) => {
    event.preventDefault();
    const clipboardText = await navigator.clipboard.readText();
    setRoomId(clipboardText);
  };

  return (
    <div className={styles["container"]}>
      <Navbar />
      <div className={styles["content"]}>
        {displayJoinRoomForm ? (
          <form className={styles["form"]} onSubmit={handleSubmitJoinRoom}>
            <input
              className={styles["input"]}
              type="text"
              placeholder="Enter your room ID"
              name="roomId"
              onChange={handleRoomInput}
              value={roomId}
            />
            <button className={styles["button"]} onClick={handlePaste}>
              Paste
            </button>
            <input
              className={styles["button"]}
              type="submit"
              value="Enter the room"
            />
          </form>
        ) : (
          <>
            <h1 className={styles["header"]}>Start Video Chat</h1>
            <button className={styles["button"]} onClick={handleCreateRoom}>
              Create a room
            </button>
            <div>or</div>
            <button className={styles["button"]} onClick={handleJoinRoom}>
              Join a room
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
