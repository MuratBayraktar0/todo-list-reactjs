import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Reducer from "./reducer/reducer";
import TodoListApp from "./TodoListApp";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

var INITIAL_STATE = window.__TODO_LIST_INITIAL_STATE__;
const store = createStore(Reducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoListApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
