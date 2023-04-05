import { useState } from "react";
import { TodoList } from "../components/TodoList/TodoList";
import { ProjectName } from "../components/ProjectName/ProjectName";
import { Button } from "../components/AddTaskBtn/AddTaskBtn";
import { SearchTodo } from "../components/SearchTodo/SearchTodo";

function App() {
  const [isModalActive, setIsModalActive] = useState(false);
  const getSerchParametr = JSON.parse(localStorage.getItem("serchParametr"));

  const [todoList, setTodoList] = useState(
    getSerchParametr
      ? JSON.parse(localStorage.getItem("filtredArr"))
      : JSON.parse(localStorage.getItem("todoArr")) || []
  );

  const openModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <div className="App">
      <SearchTodo setTodoList={setTodoList} todoList={todoList} />
      <Button setIsModalActive={setIsModalActive} onClick={openModal} />
      <ProjectName />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        isModalActive={isModalActive}
        openModal={openModal}
      />
    </div>
  );
}

export default App;
