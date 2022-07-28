import React, { useContext, useState } from "react";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import CallIcon from "@mui/icons-material/Call";

import { SocketContext } from "../context/SocketContext";

const CallUser = () => {
  const { callUser, myId, name, setName } = useContext(SocketContext);
  const [callToUser, setCallToUser] = useState("");
  const [copied, setCopied] = useState(false);

  const handleNameChange = (event) => setName(event.target.value);
  const handleCallToUserChange = (event) => setCallToUser(event.target.value);
  const handleCopyClick = (event) => {
    navigator.clipboard.writeText(myId);
    setCopied(true);
  };
  const handleCallClick = () => callUser(callToUser);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      sx={{ backgroundColor: "white", padding: "1em", borderRadius: "0.5em" }}
    >
      <Typography variant="h6" textAlign="center">
        Your ID: {myId}
      </Typography>
      <Fab
        color={copied ? "success" : "primary"}
        variant="extended"
        onClick={handleCopyClick}
      >
        Copy to clipboard
      </Fab>
      <TextField
        variant="outlined"
        label="Your name"
        value={name}
        onChange={handleNameChange}
        autoComplete="off"
      />
      <TextField
        variant="outlined"
        label="Id of user"
        onChange={handleCallToUserChange}
        autoComplete="off"
      />
      <Fab color="primary" onClick={handleCallClick}>
        <CallIcon />
      </Fab>
    </Box>
  );
};

export default CallUser;
