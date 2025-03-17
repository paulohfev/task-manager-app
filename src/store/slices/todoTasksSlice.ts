import { getTodoTasks } from "@/services/todoTaskService";
import { TodoTask } from "@/types/TodoTask";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TodoTask[] = [];

export const fetchTodoTasks = createAsyncThunk("todos/getTodos", async () => {
  return await getTodoTasks()
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoTask: (_state) => {},
    deleteTodoTask: (_state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoTasks.fulfilled, (_state, action: PayloadAction<TodoTask[]>) => {
        return action.payload;
      })
  },
});

export const { addTodoTask, deleteTodoTask } = todosSlice.actions;
export default todosSlice.reducer;