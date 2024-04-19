import React from "react";
import styles from "./Inputtxt.module.css";

const Inputtxt = ({ handeldonkey }) => {
  return (
    <div className={styles["input-container"]}>
      <input
        onKeyDown={handeldonkey}
        className={styles.input}
        type="text"
        placeholder="enter food name"
      />
    </div>
  );
};

export default Inputtxt;
