"use client"

import { Box } from "@mui/material";
import Grid from "@/components/Grid";
import TodoTasksList from "@/components/TodoTasksList";
import styles from './styles';

export default function Home() {
  return (
    <Box>
      <Grid container sx={styles.container}>
        <TodoTasksList />
      </Grid>
    </Box>
  );
}
