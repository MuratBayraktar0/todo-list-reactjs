import axios from "axios"

const todoPost = (body) => {
    const data = axios.post(
        "http://localhost:8080/todo",
        body,
        { headers: { "Content-Type": "application/json" } }).data;
    return data;
}

const todoListGet = () => {
    var data = axios.get(
        "http://localhost:8080/todo",
        { headers: { "Content-Type": "application/json" } }
    ).data;
    return data;
};


export { todoPost, todoListGet }