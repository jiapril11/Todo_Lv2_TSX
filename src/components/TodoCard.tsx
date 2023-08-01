import React from "react";
import { Todo } from "../redux/modules/todosSlice";
import { useDispatch } from "react-redux";
import { changeStateTodo, deleteTodo } from "../redux/modules/todosSlice";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Button, { StyleType } from "./utils/Button";

interface TodoProps {
  todo: Todo;
}

export default function TodoCard({ todo }: TodoProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const handleChangeStateTodo = (id: string) => {
    dispatch(changeStateTodo(id));
  };
  return (
    <TodoCardDiv>
      <p>ID: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Content: {todo.content}</p>
      <p>State: {todo.isDone.toString()}</p>
      <BtnDiv>
        <div>
          <Button
            styleType={StyleType.DELETE}
            onClick={() => handleDeleteTodo(todo.id)}
          >
            DELETE
          </Button>
          <Button
            styleType={StyleType.CHANGE}
            onClick={() => handleChangeStateTodo(todo.id)}
          >
            {todo.isDone ? `cancel` : `done`}
          </Button>
        </div>
        <div>
          <Button
            styleType={StyleType.LINK}
            onClick={() => navigate(`/detail/${todo.id}`)}
          >
            detail
          </Button>
        </div>
      </BtnDiv>
    </TodoCardDiv>
  );
}

const TodoCardDiv = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
