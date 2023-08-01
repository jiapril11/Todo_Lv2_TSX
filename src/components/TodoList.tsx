import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/config/configStore";
import TodoCard from "./TodoCard";

interface TodoProps {
  todoState: boolean;
}
export default function TodoList({ todoState }: TodoProps) {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <>
      <h2>{!todoState ? `TODO` : `DONE`}</h2>
      {todos
        .filter((todo) => todo.isDone === todoState)
        .map((todo) => (
          <TodoCard todo={todo} key={todo.id} />
        ))}
    </>
  );
}
