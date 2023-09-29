import { Stack, Typography } from "@mui/material";
import styles from './index.module.css'
const Loading = () => {
  return (
    <Stack className={styles.loading} sx={{borderColor: "#F17228 #FFB30E"}}
    >
      <Typography>Loading...</Typography>
    </Stack>
  );
};

export default Loading;
