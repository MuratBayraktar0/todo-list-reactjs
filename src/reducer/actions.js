import { todoPost, todoListGet } from "../api";
import { TODO_ADD, TODO_DELETE, TODO_LIST_GET } from "./types";



const todoAddAction = (content) => {
    todoPost({ content: content, done: false })
    return {
        type: TODO_ADD
    }
}

const todoListGetAction = () => {
    const data = todoListGet()
    return {
        type: TODO_LIST_GET,
        payload: data
    }
}

const todoDeleteAction = (id) => {
    return {
        type: TODO_DELETE,
        payload: id
    }
}


export { todoAddAction, todoDeleteAction, todoListGetAction };