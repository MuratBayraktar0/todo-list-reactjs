import axios from "axios"
import {
    postTodoRequest,
    deleteTodoRquest,
    updateTodoRquest,
    fetchTodolistFail,
    fetchTodolistRequest,
    fetchTodolistSuccess
} from "../reducer/actions";

const fetchTodolist = () => {
    return (dispatch) => {
        dispatch(fetchTodolistRequest())
        axios
            .get('http://localhost:8080/todo')
            .then(response => {
                const todolist = response.data
                dispatch(fetchTodolistSuccess(todolist))
            })
            .catch(error => {
                dispatch(fetchTodolistFail(error.message))
            })
    }
}

const postTodo = (content) => {
    return (dispatch) => {
        dispatch(postTodoRequest())
        axios
            .post('http://localhost:8080/todo', { content: content, done: false })
            .then(response => {
                console.log(response.status);
                dispatch(fetchTodolist());
            });
    }
}

const deleteTodo = (id) => {
    return (dispatch) => {
        dispatch(deleteTodoRquest())
        axios
            .delete('http://localhost:8080/todo/' + id)
            .then(response => {
                console.log(response.status);
                dispatch(fetchTodolist());
            });
    }
}

const updateTodo = (body) => {
    return (dispatch) => {
        dispatch(updateTodoRquest())
        axios
            .put('http://localhost:8080/todo/' + body.id, body)
            .then(response => {
                console.log(response.status);
                dispatch(fetchTodolist());
            });
    }
}

export { fetchTodolist, postTodo, deleteTodo, updateTodo };