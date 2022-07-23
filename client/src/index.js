import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SocketContextProvider } from "./context/SocketContext";

const container = document.getElementById("root-app");
const root = createRoot(container);

root.render(
  <SocketContextProvider>
    <App />
  </SocketContextProvider>
);
