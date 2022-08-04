import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";

import styles from "./Home.module.css";
import Navbar from "../components/Navbar";

const Home = () => {
  const { myId, setName } = useContext(SocketContext);
  const navigate = useNavigate();

  const [displayJoinRoomForm, setDisplayJoinRoomForm] = useState(false);
  const [roomIdEditable, setRoomIdEditable] = useState(true);
  const [roomId, setRoomId] = useState("");

  const handleCreateRoom = () => {
    setRoomId(myId);
    setRoomIdEditable(false);
    setDisplayJoinRoomForm(true);
  };
  const handleJoinRoom = () => setDisplayJoinRoomForm(true);
  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (event.target.checkValidity()) {
      setName(event.target.username.value);
      navigate(`/room/${roomId}`);
    }
  };
  const handleRoomInput = (event) => {
    if (!roomIdEditable) setRoomId(event.target.value);
  };
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
          <form className={styles["form"]} onSubmit={handleSubmitForm}>
            <div className={styles["form-row"]}>
              <input
                className={styles["input"]}
                type="text"
                placeholder="Enter your room ID"
                name="roomId"
                onChange={handleRoomInput}
                value={roomId}
                disabled={!roomIdEditable}
              />
              {roomIdEditable && (
                <button className={styles["button"]} onClick={handlePaste}>
                  Paste
                </button>
              )}
            </div>
            <input
              className={styles["input"]}
              type="text"
              placeholder="Enter username"
              name="username"
              minLength={3}
              required
            />
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
