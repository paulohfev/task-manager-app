"use client"

import { Box } from "@mui/material";
import AddTaskForm from "@/app/components/AddTaskForm";
import Grid from "@/app/components/Grid";
import TaskList from "@/app/components/TaskList";
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
