import { useEffect } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material"
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
          <CardContent>
            <Typography>{task.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default TodoTasksList