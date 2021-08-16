import {
  POST_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  UPDATE_TODO_REQUEST,
  FETCH_TODO_LIST_REQUEST,
  FETCH_TODO_LIST_SUCCESS,
  FETCH_TODO_LIST_FAIL,
} from "./types";

var INITIAL_STATE = {
  loading: false,
  todolist: [],
  page: {
    number: 0,
    size: 5,
    totalElements: 50,
    totalPages: 10,
  },
  error: "",
};

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_TODO_REQUEST:
      return state;
    case DELETE_TODO_REQUEST:
      return state;
    case UPDATE_TODO_REQUEST:
      return state;
    case FETCH_TODO_LIST_REQUEST:
      return { ...state, loading: true };
    case FETCH_TODO_LIST_SUCCESS:
      return {
        loading: false,
        todolist: action.payload.todolist,
        page: action.payload.page,
        error: "",
      };
    case FETCH_TODO_LIST_FAIL:
      return { loading: false, todolist: [], error: action.payload };
    default:
      return state;
  }
}

export default Reducer;
