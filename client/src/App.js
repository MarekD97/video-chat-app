import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";

import "./styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="room" element={<Link to="/">back</Link>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
