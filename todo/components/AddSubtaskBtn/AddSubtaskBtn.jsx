import React from "react";
import styles from "./AddSubtaskBtn.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

export const AddSubtask = ({ openSubTaskModal }) => {
  return (
    <>
      <div
        id="addSubtask"
        className={styles.addSubtaskBtn}
        onClick={openSubTaskModal}
      ></div>
      ;
      <ReactTooltip
        anchorSelect="#addSubtask"
        place="bottom"
        content="Добавить подзадачу"
      />
    </>
  );
};
