import { useEffect } from "react";
import { Box } from "@mui/material";
import TaskItem from "../TaskItem";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchTasks } from "@/store/slices/tasksSlice";
import styles from './styles';

const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  const tasks = useAppSelector((state) => state.tasks?.list);

  return (
    <Box sx={styles.wrapper}>
      {tasks?.map((task) => (
        <TaskItem key={`task-${task.id}`} task={task} />
      ))}
    </Box>
  );
};

export default TaskList