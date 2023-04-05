import React from "react";
import styles from "./SubTaskItem.module.css";

export const SubTaskItem = ({ task }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.circle}></div>
        <div className={styles.task}>{`${task}`}</div>
      </div>
    </>
  );
};
