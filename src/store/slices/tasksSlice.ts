import { getTasks } from "@/services/taskService";
import { Task } from "@/types/Task";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { list: Task[] } = {
  list: []
};

export const fetchTasks = createAsyncThunk("todos/getTasks", async () => {
  return await getTasks()
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const exists = state.list.some((task) => task.id === action.payload.id);
      if (!exists) {
        state.list.unshift(action.payload);
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleteTask: (state, action: PayloadAction<number>) => {
      const task = state.list.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
      action.payload.forEach((task) => {
        if (!state.list.some((t) => t.id === task.id)) {
          state.list.push(task);
        }
      });
    });
  }
});

export const { addTask, deleteTask, toggleCompleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;