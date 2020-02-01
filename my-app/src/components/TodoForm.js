import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const TodoForm = props => {
  const [newTodo, setNewTodo] = useState("");
  const handleChanges = event => {
    setNewTodo(event.target.value);
  };
  return (
    <>
      <Form>
        <FormGroup row>
          <Label for="todo" sm={3}>
            Add Todo:
          </Label>
          <Col sm={6}>
            <Input
              value={newTodo}
              onChange={handleChanges}
              type="text"
              name="todo"
            />
          </Col>
        </FormGroup>

        <div>
          <Button
              onClick={event => {
              event.preventDefault();
              props.addTodo(newTodo);
              setNewTodo("");
            }}
          >
            Add
          </Button>
        </div>
      </Form>
      <Button
        onClick={event => {
          event.preventDefault();
          props.clearCompleted();
        }}
      >
        Clear Completed
      </Button>
    </>
  );
};

export default TodoForm;