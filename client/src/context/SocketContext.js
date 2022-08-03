import React, { createContext, useState, useRef, useEffect } from "react";

import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();

const socket = io("localhost:8000");
// const socket = io("https://server-video-chat-app.herokuapp.com/");

const SocketContextProvider = ({ children }) => {
  const [stream, setStream] = useState(null);
  const [myId, setMyId] = useState("");

  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  const [name, setName] = useState("");

  const [messages, setMessages] = useState([]);

  const myCameraRef = useRef();
  const userCameraRef = useRef();

  const connectionRef = useRef();

  useEffect(() => {
    // get my id
    socket.on("me", (id) => setMyId(id));

    // call to user
    socket.on("callUser", ({ from, name, signal }) => {
      setCall({ isReceivedCall: true, from, name, signal });
    });
    socket.on("sendMessage", ({ username, message }) => {
      setMessages((prev) => [...prev, { from: username, msg: message }]);
    });
  }, []);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: call.from });
    });

    peer.on("stream", (currentStream) => {
      userCameraRef.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };
  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: myId,
        name,
      });
    });

    peer.on("stream", (currentStream) => {
      userCameraRef.current.srcObject = currentStream;
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };
  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    window.location.pathname = "/";
  };
  const sendMessage = (message) => {
    if (message === "") return;
    socket.emit("sendMessage", { username: myId, message });
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myCameraRef,
        userCameraRef,
        stream,
        setStream,
        name,
        setName,
        callEnded,
        myId,
        callUser,
        leaveCall,
        answerCall,
        messages,
        sendMessage,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketContextProvider };
