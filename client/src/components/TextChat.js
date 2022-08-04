import React, { useContext, useEffect, useRef } from "react";
import { SocketContext } from "../context/SocketContext";

import styles from "./TextChat.module.css";

const TextChat = () => {
  const { messages, myId } = useContext(SocketContext);
  const wrapperRef = useRef();

  useEffect(() => {
    const element = wrapperRef.current;

    const scrollHeight = element.scrollHeight;
    const clientHeight = element.getBoundingClientRect().height;

    element.scrollTop = scrollHeight - clientHeight;
  }, [messages]);
  return (
    <div className={styles["container"]}>
      <div className={styles["content-wrapper"]} ref={wrapperRef}>
        {messages.map(({ from, msg }, index) => (
          <div
            key={index}
            className={[
              styles["content"],
              from === myId ? styles["my-message"] : "",
            ].join(" ")}
          >
            <div className={styles["from"]}>{from}</div>
            <div className={styles["message"]}>{msg}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextChat;
