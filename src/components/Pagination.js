import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../helpers/Button";
import { fetchTodolist } from "../api";

function Pagination(props) {
  function btnCreate(totalPages, number) {
    var btn = [];
    if (totalPages > 6) {
      for (let i = 1; i <= totalPages; i++) {
        if (i < 4) {
          btn.push(
            <Button onClick={() => props.fetchTodolist(i - 1, 5)}>{i}</Button>
          );
        } else if (i == 4) {
          btn.push("...");
        } else if (totalPages - i < 3) {
          btn.push(
            <Button onClick={() => props.fetchTodolist(i - 1, 5)}>{i}</Button>
          );
        }
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        number == i
          ? btn.push(
              <div style={{ backgroundColor: "black" }}>
                <Button onClick={() => props.fetchTodolist(i - 1, 5)}>
                  {i}
                </Button>
              </div>
            )
          : btn.push(
              <Button onClick={() => props.fetchTodolist(i - 1, 5)}>{i}</Button>
            );
      }
    }

    var ttl = totalPages - 3;
    if (number == 2) {
      btn[3] = (
        <Button onClick={() => props.fetchTodolist(number + 1, 5)}>
          {number + 2}
        </Button>
      );
      btn[4] = "...";
    }

    if (number == ttl) {
      btn[2] = "...";

      btn[3] = (
        <Button onClick={() => props.fetchTodolist(number - 1, 5)}>
          {number}
        </Button>
      );
    }
    if (number > 2 && number < ttl) {
      btn[1] = "...";
      btn[2] = (
        <Button onClick={() => props.fetchTodolist(number - 1, 5)}>
          {number}
        </Button>
      );
      btn[3] = (
        <Button onClick={() => props.fetchTodolist(number, 5)}>
          {number + 1}
        </Button>
      );
      btn[4] = (
        <Button onClick={() => props.fetchTodolist(number + 1, 5)}>
          {number + 2}
        </Button>
      );
      btn[5] = "...";
    }

    return btn;
  }

  return (
    <div className="pagination">
      <Button>{"<"}</Button>
      {btnCreate(props.page.totalPages, props.page.number)}
      <Button>{">"}</Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodolist: (page, size) => dispatch(fetchTodolist(page, size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
