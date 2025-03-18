import { useEffect } from "react";
import { Box, Card, CardActions, CardContent, IconButton, TextField, Typography } from "@mui/material"
import { Delete as DeleteIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchTodoTasks } from "@/store/slices/todoTasksSlice";
import styles from './styles';

const TodoTasksList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodoTasks());
  }, [dispatch]);
  const todoTasks = useAppSelector((state) => state.todoTasks);
  console.log('todoTasks', todoTasks)

  return (
    <Box sx={styles.wrapper}>
      {todoTasks?.map((task) => (
        <Card key={`task-${task.id}`}>
          <CardContent sx={styles.cardContent}>
            <Typography>{task.title}</Typography>

            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </CardContent>
          <CardActions>
            <IconButton>
              <CheckCircleIcon color={task?.completed ? "success" : "inherit"} />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}

export default TodoTasksList