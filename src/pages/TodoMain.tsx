import { styled } from "styled-components";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default function TodoMain() {
  return (
    <div>
      <TodoListH1>Todo List</TodoListH1>
      <TodoInput />
      <TodoListDiv>
        <TodoList todoState={false} />
        <TodoList todoState={true} />
      </TodoListDiv>
    </div>
  );
}
const TodoListH1 = styled.h1`
  text-align: center;
`;
const TodoListDiv = styled.div`
  padding: 16px;
`;
