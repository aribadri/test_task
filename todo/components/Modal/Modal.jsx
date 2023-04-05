import React, { useState } from "react";
import styles from "./Modal.module.css";

export const Modal = ({ openModal, setTodoList, todoList, children,modalClass }) => {
//   const [value, setValue] = useState("");
//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const addTodo = () => {
//     if (value.trim() !== "") {
//       const newTodoList = [
//         ...todoList,
//         { id: Date.now(), todoName: value, subTasks: [] },
//       ];
//       localStorage.setItem("todoArr", JSON.stringify(newTodoList));
//       setTodoList(newTodoList);
//       setValue("");
//       openModal();
//     }
//   };

  return (
    <div className={modalClass}>
      <div className={styles.closeBtn} onClick={openModal}>
        <div className={styles.closeBtnDote}></div>
      </div>
      {children}
    </div>
  );
};
