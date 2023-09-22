import { Button, Stack, Typography } from "@mui/material";
import footerUp from "../../assets/FooterUp/FooterUp.png";

const FooterUp = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${footerUp})`,
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Stack justifyContent="center" alignItems="center" maxWidth={600}>
        <Typography
          textAlign="center"
          fontSize={{ md: 45, sm: 30, xs: 25 }}
          fontWeight={800}
          sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }} 
        >
          Are you ready to order with the best deals?
        </Typography>
        <Button variant="contained" color="primary">
          <Typography p={1} fontWeight={700} color="white">
            Proceed to order
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default FooterUp;
