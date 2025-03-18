import { AppBar as MUIAppBar } from "@mui/material";
import { Typography } from "@mui/material";
import styles from './styles';

const AppBar: React.FC = () => {
  return (
    <MUIAppBar sx={styles.appBar}>
      <Typography>Task Manager App</Typography>
    </MUIAppBar>
  );
};

export default AppBar;