import React, { useContext } from "react";
import { BiSend } from "react-icons/bi";
import { SocketContext } from "../context/SocketContext";

import styles from "./TextInput.module.css";

const TextInput = () => {
  const { sendMessage } = useContext(SocketContext);

  const handleSendMessage = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    event.target.reset();
    sendMessage(message);
  };
  return (
    <form className={styles["container"]} onSubmit={handleSendMessage}>
      <input
        className={styles["text-input"]}
        type="text"
        name="message"
        placeholder="Type a message"
        autoComplete="off"
      />
      <button className={styles["submit-button"]} type="submit">
        <BiSend />
      </button>
    </form>
  );
};

export default TextInput;
