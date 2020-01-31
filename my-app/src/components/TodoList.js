import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todoState.map(item => {
        return (
          <Todo
            toggleCompleted={props.toggleCompleted}
            key={item.id}
            todoItem={item}
          />
        );
      })}
    </div>
  );
};

export default TodoList;