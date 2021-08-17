import React, { useEffect, useState } from "react";
import "../style/style.css";
import Button from "../helpers/Button";
import { connect } from "react-redux";
import { deleteTodo, updateTodo } from "../api";

function TodoItem(props) {
  const [content, setContent] = useState(props.content);
  const [editable, setEditable] = useState(false);
  const [done, setDone] = useState(props.done);
  const [doneStyle, setDoneStyle] = useState({ textDecoration: "" });
  function editableChange() {
    editable ? setEditable(false) : setEditable(true);
    editable
      ? props.updateTodo({ id: props.id, content: content, done: done })
      : console.log("false");
  }

  function doneChange() {
    done ? setDone(false) : setDone(true);
    done
      ? props.updateTodo({ id: props.id, content: content, done: false })
      : props.updateTodo({ id: props.id, content: content, done: true });
  }

  useEffect(() => {
    done
      ? setDoneStyle({ textDecoration: "line-through" })
      : setDoneStyle({ textDecoration: "" });
  }, [done]);

  const deleteTodoHandle = () => {
    props.deleteTodo(props.id);
  };

  return (
    <div className="todo-wrap">
      <div className="todo-border">
        <img
          style={{ marginTop: "-10px", marginBottom: "-10px" }}
          height="30px"
          src="https://icon-library.com/images/hamburger-menu-icon-free/hamburger-menu-icon-free-13.jpg"
          alt={"drag-button"}
        />
        <div
          className="todo-done"
          style={{ display: editable ? "none" : "" }}
          onClick={() => doneChange()}
        ></div>
        <input
          className="todo-input"
          placeholder={props.placeholder}
          type={props.type}
          disabled={!editable}
          style={doneStyle}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          image="https://uxwing.com/wp-content/themes/uxwing/download/03-editing-user-action/edit-round.png"
          onClick={() => editableChange()}
        />
        <Button
          image="https://icon-library.com/images/img_275374_45338.png"
          onClick={() => {
            deleteTodoHandle();
          }}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number: state.page.number,
    todolist: state.todolist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    updateTodo: (body) => dispatch(updateTodo(body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
