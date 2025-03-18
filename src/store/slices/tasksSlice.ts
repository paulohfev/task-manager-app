import { getTasks } from "@/services/taskService";
import { Task } from "@/types/Task";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Task[] = [];

export const fetchTodoTasks = createAsyncThunk("tasks/getTasks", async () => {
  return await getTasks()
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleCompleteTask: (state, action: PayloadAction<number>) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoTasks.fulfilled, (_state, action: PayloadAction<Task[]>) => {
        return action.payload;
      })
  },
});

export const { addTask, deleteTask, toggleCompleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;