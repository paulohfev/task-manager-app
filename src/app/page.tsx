"use client"

import { Box } from "@mui/material";
import AddTaskForm from "@/components/AddTaskForm";
import Grid from "@/components/Grid";
import TaskList from "@/components/TaskList";
import styles from './styles';

export default function Home() {
  return (
    <Box>
      <Grid container sx={styles.container}>
        <Grid size={6} sx={styles.gridColumn}>
          <AddTaskForm />

          <TaskList />
        </Grid>
      </Grid>
    </Box>
  );
}
