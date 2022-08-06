const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });
  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });
  socket.on("answerCall", ({ signal, to, name }) => {
    io.to(to).emit("callAccepted", signal, name);
  });

  socket.on("sendMessage", ({ username, message }) => {
    io.emit("sendMessage", { username, message });
  });
});

app.use(cors());
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Server is running properly");
});

server.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
});
