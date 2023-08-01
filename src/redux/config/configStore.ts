import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todos,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
