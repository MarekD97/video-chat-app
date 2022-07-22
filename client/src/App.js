import React from "react";
import { io } from "socket.io-client";
import VideoPlayer from "./VideoPlayer";

const socket = io("localhost:8000");

socket.on("hello", (arg) => {
  console.log(arg);
});

socket.emit("howdy", "stranger");

const App = () => {
  return <div>App</div>;
};

export default App;
