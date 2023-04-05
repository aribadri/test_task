import React, { useState } from "react";
import { TodoMark } from "../TodoMark/TodoMark";
import styles from "./TodoItems.module.css";
import { DeleteTodo } from "../DeleteTodo/DeleteTodo";
import { AddSubtask } from "../AddSubtaskBtn/AddSubtaskBtn";
import { SubTaskList } from "../SubTaskList/SubTaskList";

export const TodoItem = ({
  id,
  idx,
  todo,
  todoName,
  todoList,
  setTodoList,
}) => {
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("localStorageIsChecked" + id)?.includes("true") ||
      false
  );
  const [value, setValue] = useState(todoName);
  const [isSubTaskModalActive, setIsSubTaskModalActive] = useState(false);

  const openSubTaskModal = () => {
    setIsSubTaskModalActive(!isSubTaskModalActive);
  };

  const changeTodoTitle = (e) => {
    const newTitle = e.target.value;
    setValue(e.target.value);
    todoName = e.target.value;
    todoList.forEach((el) => {
      if (el.id === id) el.todoName = newTitle;
    });
    localStorage.setItem("todoArr", JSON.stringify(todoList));
  };

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, idx) => {
    const id = e.dataTransfer.getData("id");
    const item = todoList.find((item) => item.id === +id);
    const newList = todoList.filter((item) => item.id !== +id);
    newList.splice(idx, 0, item);
    setTodoList(newList);
    localStorage.setItem("todoArr", JSON.stringify(newList));
  };

  return (
    <>
      <div
        className={styles.itemContaner}
        draggable
        onDragStart={(e) => onDragStart(e, todo.id)}
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, idx)}
      >
        <TodoMark
          id={id}
          todoName={todoName}
          setIsChecked={setIsChecked}
          checked={isChecked}
        />

        <input
          type="text"
          value={value}
          onChange={(e) => changeTodoTitle(e)}
          className={isChecked ? styles.itemChecked : styles.itemNotChecked}
        />
        <AddSubtask
          openSubTaskModal={openSubTaskModal}
          todoList={todoList}
          todo={todo}
          idx={idx}
          id={id}
          isSubTaskModalActive={isSubTaskModalActive}
        />
        <DeleteTodo id={id} todoList={todoList} setTodoList={setTodoList} />
      </div>
      <SubTaskList
        subTasks={todo.subTasks}
        openSubTaskModal={openSubTaskModal}
        isSubTaskModalActive={isSubTaskModalActive}
        todoList={todoList}
      />
    </>
  );
};
