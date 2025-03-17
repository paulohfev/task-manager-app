"use client"

import { useEffect } from "react";
import { fetchTodoTasks } from "@/store/slices/todoTasksSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { Box } from "@mui/material";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodoTasks());
  }, [dispatch]);

  const todoTasks = useAppSelector((state) => state.todoTasks);
  console.log('todoTasks', todoTasks)

  return (
    <Box>
      Task Manager App
    </Box>
  );
}
