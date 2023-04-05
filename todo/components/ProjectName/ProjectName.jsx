import React, { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import styles from "./ProjectName.module.css";

export const ProjectName = () => {
  const [value, setValue] = useState(localStorage.getItem("name") || "");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(e.target.value);
    localStorage.setItem("name", newValue);
  };

  return (
    <>
      <input
        id="projectTitle"
        type="text"
        onChange={handleChange}
        value={value}
        className={styles.projectNameInput}
        placeholder="Введите назвние"
      />
      <ReactTooltip
        anchorSelect="#projectTitle"
        place="bottom"
        content="Нажмите, чтобы изменить название"
      />
    </>
  );
};
