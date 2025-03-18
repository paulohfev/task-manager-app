import { useEffect, useState } from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import TaskItem from "../TaskItem";
import { TaskFilter } from "@/app/constants/taskFilter";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchTasks } from "@/store/slices/tasksSlice";
import styles from './styles';

const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<TaskFilter>(TaskFilter.all);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  const tasks = useAppSelector((state) => state.tasks?.list);

  const filteredTasks = tasks?.filter((task) => {
    if (filter === TaskFilter.completed) return task.completed;
    if (filter === TaskFilter.incomplete) return !task.completed;
    return true;
  });

  return (
    <Box sx={styles.wrapper}>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={(_e, newFilter) => newFilter && setFilter(newFilter)}
      >
        <ToggleButton value={TaskFilter.all}>All</ToggleButton>
        <ToggleButton value={TaskFilter.completed}>Completed</ToggleButton>
        <ToggleButton value={TaskFilter.incomplete}>Incomplete</ToggleButton>
      </ToggleButtonGroup>

      {filteredTasks?.map((task) => (
        <TaskItem key={`task-${task.id}`} task={task} />
      ))}
    </Box>
  );
};

export default TaskList