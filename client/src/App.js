import React from "react";
import { io } from "socket.io-client";
import WebCamera from "./WebCamera";

const socket = io("localhost:8000");

socket.on("hello", (arg) => {
  console.log(arg);
});

socket.emit("howdy", "stranger");

const App = () => {
  return (
    <div>
      <WebCamera />
    </div>
  );
};

export default App;
