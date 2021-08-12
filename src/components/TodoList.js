import TodoItem from "./TodoItem";
import "../style/style.css"
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { fetchTodolist } from "../api";

function TodoList(props) {
    useEffect(() => {
        props.fetchTodolist()
    }, [])

    return (
        props.loading ?
            (<h2>Loading</h2>) :
            props.error ?
                (<h2>{props.error}</h2>) :
                props.todolist ?
                    <div>{
                        props.todolist.map((item, index) => (
                            <TodoItem
                                key={index}
                                content={item.content}
                                done={item.done}
                                id={item.ID}
                            />
                        ))} </div > :
                    (<h2>Your list is empty</h2>)

    );

}


const mapStateToProps = (state) => {
    return {
        todolist: state.todolist,
        loading: state.loading,
        error: state.error
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodolist: () => dispatch(fetchTodolist())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
