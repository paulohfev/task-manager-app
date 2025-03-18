"use client"

import { Box } from "@mui/material";
import Grid from "@/components/Grid";
import TaskList from "@/components/TaskList";
import styles from './styles';

export default function Home() {
  return (
    <Box>
      <Grid container sx={styles.container}>
        <TaskList />
      </Grid>
    </Box>
  );
}
