import {
  POST_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  UPDATE_TODO_REQUEST,
  FETCH_TODO_LIST_REQUEST,
  FETCH_TODO_LIST_SUCCESS,
  FETCH_TODO_LIST_FAIL,
} from "./types";

const postTodoRequest = () => {
  return {
    type: POST_TODO_REQUEST,
  };
};

const fetchTodolistRequest = () => {
  return {
    type: FETCH_TODO_LIST_REQUEST,
  };
};

const fetchTodolistSuccess = (todolist) => {
  return {
    type: FETCH_TODO_LIST_SUCCESS,
    payload: todolist,
  };
};

const fetchTodolistFail = (error) => {
  return {
    type: FETCH_TODO_LIST_FAIL,
    payload: error,
  };
};

const deleteTodoRquest = () => {
  return {
    type: DELETE_TODO_REQUEST,
  };
};

const updateTodoRquest = () => {
  return {
    type: UPDATE_TODO_REQUEST,
  };
};

export {
  postTodoRequest,
  deleteTodoRquest,
  updateTodoRquest,
  fetchTodolistRequest,
  fetchTodolistSuccess,
  fetchTodolistFail,
};
