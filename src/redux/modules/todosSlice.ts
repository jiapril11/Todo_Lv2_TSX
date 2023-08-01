import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

const initialState: Todo[] = [
  {
    id: uuid(),
    title: "title1",
    content: "content1",
    isDone: false,
  },
  {
    id: uuid(),
    title: "title2",
    content: "content2",
    isDone: false,
  },
  {
    id: uuid(),
    title: "title3",
    content: "content3",
    isDone: true,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    changeStateTodo: (state, action: PayloadAction<string>) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, changeStateTodo } = todosSlice.actions;
export default todosSlice.reducer;
