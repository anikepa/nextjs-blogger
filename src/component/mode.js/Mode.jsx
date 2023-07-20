"use client";
import React, { useContext } from "react";
import styles from "./model.module.css";
import { ThemeContext } from "../../../ContextAPI/ThemeContext";
const Mode = () => {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>😯</div>
      <div className={styles.icon}>🌙</div>
      <div
        className={styles.dot}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Mode;
