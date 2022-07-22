import React, { useEffect, useRef } from "react";

const WebCamera = ({ peer }) => {
  const ref = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        ref.current.srcObject = currentStream;
      });
  }, []);

  return <video width="640" height="480" ref={ref} autoPlay></video>;
};

export default WebCamera;
