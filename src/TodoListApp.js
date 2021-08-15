import React from "react";
import Pagination from "./components/Pagination";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

function TodoListApp() {
  return (
    <div className="todo-list-add">
      <h2>To-do List</h2>
      <TodoAdd />
      <TodoList />
      <Pagination totalPages={10} />
    </div>
  );
}

export default TodoListApp;
