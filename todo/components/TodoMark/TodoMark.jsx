import React from "react";
import styles from "./TodoMar.module.css";

export const TodoMark = ({ id, setIsChecked, checked }) => {
  const handleChange = (e) => {
    const localStorageIsChecked = e.target.checked;
    e.target.checked ? setIsChecked(true) : setIsChecked(false);
    localStorage.setItem("localStorageIsChecked" + id, localStorageIsChecked);
  };
  return (
    <>
      <div className={styles.item}>
        <div className={styles.togglePillColor}>
          <input
            type="checkbox"
            id={"pill3" + id}
            name="check"
            onChange={(e) => handleChange(e)}
            checked={checked}
          />
          <label htmlFor={"pill3" + id}></label>
        </div>
      </div>
    </>
  );
};
