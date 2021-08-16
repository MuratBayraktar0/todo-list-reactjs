import TodoItem from "./TodoItem";
import "../style/style.css";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { fetchTodolist, updateTodoSort } from "../api";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { fetchTodolistSuccess } from "../reducer/actions";

function TodoList(props) {
  useEffect(() => {
    props.fetchTodolist(0);
  }, []);

  function handleOnDragEnd(result) {
    var backId = "";
    var frontId = "";
    if (result.source.index > result.destination.index) {
      backId =
        result.destination.index > 0
          ? props.todolist[result.destination.index - 1].ID
          : "";
      frontId =
        props.todolist.length - 1 > result.destination.index
          ? props.todolist[result.destination.index].ID
          : "";
      props.updateTodoSort(backId, result.draggableId, frontId);
    } else if (result.source.index < result.destination.index) {
      backId =
        result.destination.index > 0
          ? props.todolist[result.destination.index].ID
          : "";
      frontId =
        props.todolist.length - 1 > result.destination.index
          ? props.todolist[result.destination.index + 1].ID
          : "";
      props.updateTodoSort(backId, result.draggableId, frontId);
    }
    const list = Array.from(props.todolist);
    const [reorderedItem] = list.splice(result.source.index, 1);
    list.splice(result.destination.index, 0, reorderedItem);
    props.fetchTodolistSuccess({ todolist: list });
  }

  return props.loading ? (
    <h2>Loading</h2>
  ) : props.error ? (
    <h2>{props.error}</h2>
  ) : props.todolist ? (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todo-list-drag">
        {(provided) => (
          <div
            className="todo-list-drag"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {props.todolist.map((item, index) => (
              <Draggable key={item.ID} draggableId={item.ID} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <TodoItem
                      content={item.content}
                      done={item.done}
                      id={item.ID}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  ) : (
    <h2>Your list is empty</h2>
  );
}

const mapStateToProps = (state) => {
  return {
    todolist: state.todolist,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodolist: (page, size) => dispatch(fetchTodolist(page, size)),
    updateTodoSort: (backId, currentId, frontId) =>
      dispatch(updateTodoSort(backId, currentId, frontId)),
    fetchTodolistSuccess: (todolist) =>
      dispatch(fetchTodolistSuccess(todolist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
