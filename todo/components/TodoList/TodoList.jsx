import React, { useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
import { Modal } from "../Modal/Modal";

export const TodoList = ({
  todoList,
  setTodoList,
  isModalActive,
  openModal,
  openSubTaskModal,
  isSubTaskModalActive,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value.trim() !== "") {
      const newTodoList = [
        ...todoList,
        { id: Date.now(), todoName: value, subTasks: [] },
      ];
      localStorage.setItem("todoArr", JSON.stringify(newTodoList));
      setTodoList(newTodoList);
      setValue("");
      openModal();
    }
  };

  return (
    <>
      <div className={styles.container}>
        {todoList &&
          todoList.map((todo, idx) => (
            <TodoItem
              isSubTaskModalActive={isSubTaskModalActive}
              todo={todo}
              key={todo.id}
              todoName={todo.todoName}
              id={todo.id}
              todoList={todoList}
              setTodoList={setTodoList}
              idx={idx}
              openSubTaskModal={openSubTaskModal}
            />
          ))}
      </div>

      {isModalActive ? (
        <Modal openModal={openModal} modalClass={styles.modalContainer}>
          <input
            type="text"
            className={styles.modalInput}
            onChange={handleChange}
            value={value}
            placeholder="Введите название задачи"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}
          />
          <div className={styles.addBtn} onClick={addTodo}>
            Add
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};
