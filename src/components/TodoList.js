//import TodoItem from "./TodoItem";
import "../style/style.css"
import { connect, useDispatch } from "react-redux";
import { todoListGetAction } from "../reducer/actions";
import { useEffect } from "react";


function TodoList(props) {
    useEffect(() => {
        dispatch(todoListGetAction());
    }, []);
    const dispatch = useDispatch();



    return (
        <div>
            {/* {props.todolist.map((item, index) => (
                < TodoItem
                    key={index}
                    content={item.content}
                    done={item.done}
                    id={item.id}
                />
            ))} */}
        </div>
    );
}


const mapStateToProps = (state) => {
    return { todolist: state.todolist }
}

const mapActionToProps = () => {
    return { todoListGetAction }
}

export default connect(mapStateToProps, mapActionToProps)(TodoList);
