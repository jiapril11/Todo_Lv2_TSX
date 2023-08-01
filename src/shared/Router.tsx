import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoMain from "../pages/TodoMain";
import TodoDetail from "../pages/TodoDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoMain />} />
        <Route path="/detail/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
