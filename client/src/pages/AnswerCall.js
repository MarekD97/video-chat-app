import React, { useContext } from "react";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SocketContext } from "../context/SocketContext";

import CallIcon from "@mui/icons-material/Call";

const AnswerCall = () => {
  const { answerCall, call } = useContext(SocketContext);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={16}
      sx={{
        backgroundColor: "white",
        padding: "1em",
        borderRadius: "0.5em",
        minWidth: "50%",
      }}
    >
      <Typography variant="h4">{call.name} is calling...</Typography>
      <Fab color="success" variant="extended" onClick={() => answerCall()}>
        <CallIcon sx={{ mr: 1 }} />
        Answer
      </Fab>
    </Box>
  );
};

export default AnswerCall;
