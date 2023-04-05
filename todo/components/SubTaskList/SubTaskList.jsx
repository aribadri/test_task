import React, { useState } from "react";
import { SubTaskItem } from "../SubTaskItem/SubTaskItem";
import { Modal } from "../Modal/Modal";
import styles from "./SubTasks.module.css";

export const SubTaskList = ({
  id,
  idx,
  todo,
  todoList,
  subTasks,
  openSubTaskModal,
  isSubTaskModalActive,
}) => {
  const [value, setValue] = useState("");

  const handleChangeSubTask = (e) => {
    setValue(e.target.value);
  };

  const handleAddSubTask = () => {
    subTasks.push(value);
    setValue("");
    openSubTaskModal();
    localStorage.setItem("todoArr", JSON.stringify(todoList));
  };

  return (
    <div className={styles.container}>
      {subTasks?.map((task, idx) => (
        <SubTaskItem key={`${idx}{task}`} id={idx + 1} task={task} />
      ))}
      {isSubTaskModalActive ? (
        <Modal openModal={openSubTaskModal} modalClass={styles.modalContainer}>
          <input
            type="text"
            className={styles.modalInput}
            onChange={handleChangeSubTask}
            value={value}
            placeholder="Введите подзадачу"
          />
          <div
            className={styles.addBtn}
            onClick={handleAddSubTask}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleAddSubTask();
              }
            }}
          >
            Add
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};
