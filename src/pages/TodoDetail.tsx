import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../redux/config/configStore";
import { Todo } from "../redux/modules/todosSlice";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function TodoDetail() {
  const param = useParams();
  const todos = useSelector((state: RootState) => state.todos);
  const todoItem = todos.filter((todo: Todo) => todo.id === param.id)[0];

  return (
    <TodoDetailDiv>
      <TodoDetailContentDiv>
        <h2>Todo Detail</h2>
        <p>ID: {todoItem.id}</p>
        <p>Title: {todoItem.title}</p>
        <p>Content: {todoItem.content}</p>
        <p>State:{todoItem.isDone.toString()}</p>
        <Link to="/">Back</Link>
      </TodoDetailContentDiv>
    </TodoDetailDiv>
  );
}

const TodoDetailDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;
const TodoDetailContentDiv = styled.div`
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
  background-color: #fff;

  & h2 {
    margin: 0 0 20px 0;
    padding: 0 0 10px 0;
    border-bottom: 1px solid #ddd;
  }
`;
