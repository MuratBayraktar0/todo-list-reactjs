import { TODO_ADD, TODO_DELETE, TODO_LIST_GET } from "./types";
import { todoListGet } from "../api";

var initialState = { todolist: [] };


function Reducer(state = initialState, action) {
    console.log(todoListGet());
    switch (action.type) {
        case TODO_ADD:
            return state;
        case TODO_DELETE:
            return state;
        case TODO_LIST_GET:
            return { ...action.payload };
        default:
            return state;
    }
}

export default Reducer;
