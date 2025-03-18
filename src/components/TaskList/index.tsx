import { useEffect } from "react";
import { Box } from "@mui/material";
import AddTaskForm from "../AddTaskForm";
import Grid from "../Grid";
import TaskItem from "../TaskItem";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchTodoTasks } from "@/store/slices/tasksSlice";
import styles from './styles';

const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodoTasks());
  }, [dispatch]);
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <Grid size={6}>
      <Box sx={styles.wrapper}>
        <AddTaskForm />

        {tasks?.map((task) => (
          <TaskItem key={`task-${task.id}`} task={task} />
        ))}
      </Box>
    </Grid>
  );
};

export default TaskList