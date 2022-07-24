import React, { useContext, useState } from "react";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import CallIcon from "@mui/icons-material/Call";

import { SocketContext } from "../context/SocketContext";

const CallUser = () => {
  const { callUser, myId, name, setName } = useContext(SocketContext);

  const handleChange = (event) => setName(event.target.value);
  const handleClick = () => callUser(myId);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      gap={4}
      sx={{ backgroundColor: "white", padding: "1em", borderRadius: "0.5em" }}
    >
      <TextField
        variant="outlined"
        label="Name"
        value={name}
        onChange={handleChange}
      />
      <Fab color="primary" onClick={handleClick}>
        <CallIcon />
      </Fab>
    </Box>
  );
};

export default CallUser;
