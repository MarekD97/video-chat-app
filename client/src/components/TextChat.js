import React, { useEffect, useRef } from "react";

import styles from "./TextChat.module.css";

const messages = [
  { from: "user1", msg: "Hello, How are you?" },
  { from: "user1", msg: "What are you doing now?" },
  { from: "user2", msg: "I'm good & How are you?" },
  {
    from: "me",
    msg: "I will join in just 15 minutes. I have one priority task.",
  },
  { from: "user1", msg: "Okay. No problem" },
  { from: "user1", msg: "Hello, How are you?" },
  { from: "user1", msg: "What are you doing now?" },
  { from: "user2", msg: "I'm good & How are you?" },
  { from: "me", msg: "I'm good & How are you?" },
  { from: "me", msg: "I'm good & How are you?" },
  { from: "me", msg: "I'm good & How are you?" },
];

const TextChat = () => {
  const wrapperRef = useRef();

  useEffect(() => {
    const element = wrapperRef.current;

    const scrollHeight = element.scrollHeight;
    const clientHeight = element.getBoundingClientRect().height;

    element.scrollTop = scrollHeight - clientHeight;
  }, []);
  return (
    <div className={styles["container"]}>
      <div className={styles["content-wrapper"]} ref={wrapperRef}>
        {messages.map(({ from, msg }, index) => (
          <div
            key={index}
            className={[
              styles["content"],
              from === "me" ? styles["my-message"] : "",
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
