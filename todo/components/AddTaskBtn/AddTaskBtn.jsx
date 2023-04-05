import React from "react";
import styles from "./AddTaskBtn.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";


export const Button = (props) => {
  return (
    <div  id="addTask" onClick={props.onClick} className={styles.button}>
      Add Todo
      <ReactTooltip
        anchorSelect="#addTask"
        place="bottom"
        content="Добавить задачу"
      />
    </div>
  );
};
