import React, { useState } from "react";
import styles from "./Navbar.module.css";

const buttons = [
  { id: 0, name: "Chat" },
  { id: 1, name: "Participants" },
];

const Navbar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["brand"]}>Video Conference Meeting</div>
      <div className={styles["menu"]}>
        {buttons.map((button) => (
          <button
            key={button.id}
            className={styles["menu-button"]}
            data-active={button.id === selected}
            onClick={() => setSelected(button.id)}
          >
            {button.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
