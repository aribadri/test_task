import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "./DeleteTodo.module.css";

export const DeleteTodo = ({ todoList, setTodoList, id }) => {
  const deleteTodo = () => {
    const deleteTodoList = JSON.parse(localStorage.getItem("todoArr")).filter(
      (el) => el.id !== id
    );
    setTodoList(deleteTodoList);
    localStorage.setItem("todoArr", JSON.stringify(deleteTodoList));
    localStorage.removeItem("localStorageIsChecked" + id);
    localStorage.removeItem("todoTitle" + id);
  };
  return (
    <>
      <div id="todo" className={styles.circle} onClick={deleteTodo}>
        <div className={styles.line}></div>
      </div>
      <ReactTooltip anchorSelect="#todo" place="bottom" content="Удалить задачу" />
    </>
  );
};
