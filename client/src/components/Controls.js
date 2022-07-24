import React, { useContext, useState } from "react";

import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageIcon from "@mui/icons-material/Message";
import CallEndIcon from "@mui/icons-material/CallEnd";

import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

import { SocketContext } from "../context/SocketContext";

const buttonStyle = {
  flexDirection: "column",
  flex: 1,
  padding: 2,
  color: "#ffffff",
};

const Controls = () => {
  const { leaveCall } = useContext(SocketContext);

  const [collapsed, setCollapsed] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const handleMoreClick = () => setCollapsed((prev) => !prev);
  const handleVideoCamClick = () => setVideoEnabled((prev) => !prev);
  const handleAudioClick = () => setAudioEnabled((prev) => !prev);

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ padding: "1em 0" }}
      >
        <Fab
          color={collapsed ? "primary" : "secondary"}
          onClick={handleMoreClick}
        >
          {collapsed ? <MoreHorizIcon /> : <MoreVertIcon />}
        </Fab>
        <Fab color="primary">
          <MessageIcon />
        </Fab>
        <Fab color="error" variant="extended" onClick={leaveCall}>
          <CallEndIcon sx={{ mr: 1 }} />
          <p>05:12</p>
        </Fab>
      </Box>
      {!collapsed && (
        <Box
          display="flex"
          justifyContent="space-evenly"
          backgroundColor="primary.dark"
        >
          <Button sx={buttonStyle} onClick={handleVideoCamClick}>
            {videoEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
            Video {videoEnabled ? "on" : "off"}
          </Button>
          <Button sx={buttonStyle} onClick={handleAudioClick}>
            {audioEnabled ? <MicIcon /> : <MicOffIcon />}
            Audio {audioEnabled ? "on" : "off"}
          </Button>
        </Box>
      )}
    </div>
  );
};

export default Controls;
