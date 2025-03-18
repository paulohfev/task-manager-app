import { Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import { Delete as DeleteIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { useAppDispatch } from "@/store/store";
import { deleteTask, toggleCompleteTask } from "@/store/slices/tasksSlice";
import { Task } from "@/types/Task";
import styles from './styles';

type TaskItemProps = {
  task: Task
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardContent sx={styles.cardContent}>
        <Typography>{task.title}</Typography>

        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" onClick={() => dispatch(deleteTask(task?.id))} />
        </IconButton>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => dispatch(toggleCompleteTask(task?.id))}>
          <CheckCircleIcon color={task?.completed ? "success" : "inherit"} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default TaskItem;