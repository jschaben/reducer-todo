import React from "react";

const Todo = props => {
  return (
    <p
      className="todoItem"
      style={
        props.todoItem.completed ? { textDecoration: "#2541b2 wavy line-through" } : null
      }
      onClick={e => {
        e.preventDefault();
        props.toggleCompleted(props.todoItem.id);
      }}
    >
      {props.todoItem.item}
    </p>
  );
};

export default Todo;