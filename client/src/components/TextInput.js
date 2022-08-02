import React from "react";
import { BiSend } from "react-icons/bi";

import styles from "./TextInput.module.css";

const TextInput = () => {
  const handleSendMessage = (event) => {
    event.preventDefault();
    console.log(event.target.message.value);
  };
  return (
    <form className={styles["container"]} onSubmit={handleSendMessage}>
      <input
        className={styles["text-input"]}
        type="text"
        name="message"
        placeholder="Type a message"
      />
      <button className={styles["submit-button"]} type="submit">
        <BiSend />
      </button>
    </form>
  );
};

export default TextInput;
