import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Reducer from "./reducer/reducer";
import TodoListApp from "./TodoListApp";

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoListApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
