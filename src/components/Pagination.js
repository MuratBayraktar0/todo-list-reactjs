import React from "react";
import Button from "../helpers/Button";

function Pagination(props) {
  function btnCreate(totalPages, number) {
    var btn = [];
    if (totalPages > 6) {
      for (let i = 0; i < totalPages; i++) {
        if (i < 3) {
          btn.push(
            <Button key={i} onClick={() => props.onChange(i)}>
              {i + 1}
            </Button>
          );
        } else if (i === 3) {
          btn.push("...");
        } else if (totalPages - i < 4) {
          btn.push(
            <Button key={i} onClick={() => props.onChange(i)}>
              {i + 1}
            </Button>
          );
        }
      }

      var total = totalPages - 3;
      if (number === 2) {
        btn[3] = (
          <Button key={number + 1} onClick={() => props.onChange(number + 1)}>
            {number + 2}
          </Button>
        );
        btn[4] = "...";
      }

      if (number === total) {
        btn[2] = "...";

        btn[3] = (
          <Button key={number - 1} onClick={() => props.onChange(number - 1)}>
            {number}
          </Button>
        );
      }

      if (number > 2 && number < total) {
        btn[1] = "...";
        btn[2] = (
          <Button key={number - 1} onClick={() => props.onChange(number - 1)}>
            {number}
          </Button>
        );
        btn[3] = (
          <Button key={number} onClick={() => props.onChange(number)}>
            {number + 1}
          </Button>
        );
        btn[4] = (
          <Button key={number + 1} onClick={() => props.onChange(number + 1)}>
            {number + 2}
          </Button>
        );
        btn[5] = "...";
      }
    } else {
      for (let i = 0; i < totalPages; i++) {
        btn.push(
          <Button key={i} onClick={() => props.onChange(i)}>
            {i + 1}
          </Button>
        );
      }
    }

    btn.forEach((item, index) => {
      if (parseInt(item.key) === number) {
        btn[index] = (
          <div className="pagination-target-button">{btn[index]}</div>
        );
      }
    });

    return btn;
  }

  return (
    <div className="pagination">
      <Button
        disabled={props.number === 0 ? true : false}
        onClick={() => props.onChange(props.number - 1)}
      >
        {"<"}
      </Button>
      {btnCreate(props.totalPages, props.number)}
      <Button
        disabled={props.number === props.totalPages - 1 ? true : false}
        onClick={() => props.onChange(props.number + 1)}
      >
        {">"}
      </Button>
    </div>
  );
}

export default Pagination;
