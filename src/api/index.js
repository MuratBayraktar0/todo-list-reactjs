import axios from "axios";
import {
  postTodoRequest,
  deleteTodoRquest,
  updateTodoRquest,
  fetchTodolistFail,
  fetchTodolistRequest,
  fetchTodolistSuccess,
} from "../reducer/actions";

const fetchTodolist = (page) => {
  return (dispatch) => {
    dispatch(fetchTodolistRequest());
    var size = 5;
    axios
      .get("http://localhost:8080/todo?page=" + page + "&size=" + size)
      .then((response) => {
        const todolist = response.data;
        dispatch(fetchTodolistSuccess(todolist));
      })
      .catch((error) => {
        dispatch(fetchTodolistFail(error.message));
      });
  };
};

const postTodo = (content, number) => {
  return (dispatch) => {
    dispatch(postTodoRequest());
    axios
      .post("http://localhost:8080/todo", { content: content, done: false })
      .then((response) => {
        dispatch(fetchTodolist(number));
      })
      .catch((error) => {
        alert("Content must not be empty");
      });
  };
};

const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(deleteTodoRquest());
    axios.delete("http://localhost:8080/todo/" + id).then((response) => {
      dispatch(fetchTodolist(0));
    });
  };
};

const updateTodo = (body) => {
  return (dispatch) => {
    dispatch(updateTodoRquest());
    axios.put("http://localhost:8080/todo/" + body.id, body);
  };
};

const updateTodoSort = (backId, currentId, frontId) => {
  return (dispatch) => {
    dispatch(updateTodoRquest());
    const url =
      "http://localhost:8080/sort?backid=" +
      backId +
      "&currentid=" +
      currentId +
      "&frontid=" +
      frontId;
    axios.put(url);
  };
};

export { fetchTodolist, postTodo, deleteTodo, updateTodo, updateTodoSort };
