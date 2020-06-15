import React, { useState } from "react";
import { Form } from "semantic-ui-react";

export default function TodoForm({ addItem }) {
  const [todo, setTodo] = useState("");

  function handleSubmitYo(e) {
    //e.preventDefault()
    addItem(todo);
    setTodo("");
  }
  function handleChange(e) {
    setTodo(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmitYo}>
      <Form.Input
        label={"Todo Name"}
        placeholder={"enter todo"}
        required
        value={todo}
        onChange={handleChange}
      />
      <Form.Button>add</Form.Button>
    </Form>
  );
}
