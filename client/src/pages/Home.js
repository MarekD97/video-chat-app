import React from "react";

import { Link } from "react-router-dom";

import styles from "./Home.module.css";
import Navbar from "../components/Navbar";

const Home = () => {
  const handleCreateRoom = () => {};

  return (
    <div className={styles["container"]}>
      <Navbar />
      <div className={styles["content"]}>
        <h1 className={styles["header"]}>Start Video Chat</h1>
        <button className={styles["button"]} onClick={handleCreateRoom}>
          Create a room
        </button>
        or
        <Link className={styles["button"]} to="/room">
          Join a room
        </Link>
      </div>
    </div>
  );
};

export default Home;
