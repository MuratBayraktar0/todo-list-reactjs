import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchTodolist } from "./api";
import Pagination from "./components/Pagination";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

function TodoListApp(props) {
  useEffect(() => {
    props.fetchTodolist(props.number);
  }, []);
  return (
    <div className="todo-list-add">
      <h2>To-do List</h2>
      <TodoAdd />
      <TodoList />
      <Pagination
        totalPages={props.totalPages}
        number={props.number}
        onChange={props.fetchTodolist}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    number: state.page.number,
    totalPages: state.page.totalPages,
    size: state.page.size,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodolist: (page) => dispatch(fetchTodolist(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListApp);
