import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../redux/modules/todosSlice";
import { Todo } from "../redux/modules/todosSlice";
import styled from "styled-components";
import Button, { StyleType } from "./utils/Button";

interface TodoInput {
  title: string;
  content: string;
}

export default function TodoInput() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<TodoInput>({ title: "", content: "" });
  const idInputRef = useRef<HTMLInputElement | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTodo((prev: TodoInput) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      ...todo,
      id: uuid(),
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <FormDiv>
        <div>
          <label>
            Title:{" "}
            <input
              className="border"
              type="text"
              name="title"
              value={todo.title}
              onChange={handleOnChange}
              ref={idInputRef}
            />
          </label>
        </div>
        <div>
          <label>
            Content:{" "}
            <input
              className="border"
              type="text"
              name="content"
              value={todo.content}
              onChange={handleOnChange}
            />
          </label>
        </div>
        <Button styleType={StyleType.FORM_SUBMIT} type="submit">
          submit
        </Button>
      </FormDiv>
    </form>
  );
}

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px 0;
`;
