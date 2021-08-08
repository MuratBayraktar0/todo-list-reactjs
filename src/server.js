import axios from "axios"

const initialState = {
    todolist =[]
};


var initialState = await axios.get(
    "http://localhost:8080/todo",
    { headers: { "Content-Type": "application/json" } }
).data;


window.__PRODUCT_LIST_INITIAL_STATE__ = JSON.stringify(initialState);
console.log("hello");
console.log(initialState);