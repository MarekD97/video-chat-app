const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Server is running properly");
});

server.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
});
