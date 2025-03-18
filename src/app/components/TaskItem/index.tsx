import { useState } from "react";
import { Box, Card, CardContent, Grow, IconButton, Typography } from "@mui/material";
import { Delete as DeleteIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { useAppDispatch } from "@/app/store/store";
import { deleteTask, toggleCompleteTask } from "@/app/store/slices/tasksSlice";
import { Task } from "@/app/types/Task";
import styles from './styles';

type TaskItemProps = {
  task: Task
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(true);
  const animationTime = 300;

  const handleDelete = () => {
    setVisible(false);

    setTimeout(() => {
      dispatch(deleteTask(task?.id))
    }, animationTime)
  }

  return (
    <Grow in={visible} timeout={animationTime}>
      <Card sx={styles.card}>
        <CardContent sx={styles.cardContent}>
          <Box sx={styles.cardContainer}>
            <IconButton onClick={() => dispatch(toggleCompleteTask(task?.id))}>
              <CheckCircleIcon color={task?.completed ? "success" : "inherit"} />
            </IconButton>

            <Typography>{task.title}</Typography>
          </Box>

          <IconButton aria-label="delete" size="small">
            <DeleteIcon color="warning" fontSize="inherit" onClick={() => handleDelete()} />
          </IconButton>
        </CardContent>
      </Card>
    </Grow>
  )
}

export default TaskItem;