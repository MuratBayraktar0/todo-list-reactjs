import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../helpers/Button";
import Input from "../helpers/Input";
import { postTodo } from "../api";

import "../style/style.css";

function TodoAdd(props) {
  const [content, setContent] = useState("");

  return (
    <div className="todoAdd">
      <form
        onSubmit={() => {
          props.postTodo(content, props.number);
        }}
      >
        <div className="todoAdd-button-input">
          <Input
            image="https://icon-library.com/images/to-do-icon/to-do-icon-18.jpg"
            placeholder="To do"
            onChange={(e) => setContent(e.target.value)}
          />
          <Button>ADD</Button>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    number: state.page.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postTodo: (content) => dispatch(postTodo(content)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd);
