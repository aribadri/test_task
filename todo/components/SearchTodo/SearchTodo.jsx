import React, { useState } from "react";
import styles from "./SearchTodo.module.css";
import { useEffect } from "react";

export const SearchTodo = ({ todoList, setTodoList }) => {
  const getSerchParametr = JSON.parse(localStorage.getItem("serchParametr"));
  const [value, setValue] = useState(getSerchParametr || "");

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (todoList.length > 0 && newValue) {
      const filteredTodoList = todoList.filter((el) =>
        el.todoName.includes(newValue)
      );
      setTodoList(filteredTodoList);
      localStorage.setItem("filtredArr", JSON.stringify(filteredTodoList));
      localStorage.setItem("serchParametr", JSON.stringify(newValue));
    } else {
      setTodoList(JSON.parse(localStorage.getItem("todoArr")));
      localStorage.setItem("serchParametr", JSON.stringify(""));
    }
  };

  return (
    <input
      value={value}
      onChange={(e) => handleChange(e)}
      placeholder="Search"
      className={styles.searchInput}
    />
  );
};
