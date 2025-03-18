import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { addTask } from "@/store/slices/tasksSlice";
import { useAppDispatch } from "@/store/store";
import { Task } from "@/types/Task";
import styles from './styles';

const AddTaskForm: React.FC = () => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const dispatch = useAppDispatch();
  
  const handleAddTask = () => {
    const newTaskId = Date.now();
  
    const newTask: Task = {
      userId: 1,
      id: newTaskId,
      title: newTaskTitle,
      completed: false,
    };

    dispatch(addTask(newTask));
    setNewTaskTitle("");
  };

  return (
    <Box sx={styles.wrapper}>
      <TextField
        label="New Task"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        fullWidth
      />
      <Button disabled={!newTaskTitle} variant="contained" onClick={handleAddTask}>
        Add Task
      </Button>
    </Box>
  );
};

export default AddTaskForm;