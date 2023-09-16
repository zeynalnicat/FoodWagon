import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/submit-form", {
        email,
        password,
      });

      if (response.status === 200) {
        alert("Form submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Stack>
      <Grid container height={{ md: "100vh" }} spacing={{ xs: 7, md: 0 }}>
        <Grid
          item
          md={6}
          xs={12}
          bgcolor="secondary.main"
          p={{ xs: 10, md: 0 }}
        >
          <Container maxWidth="sm" sx={{ height: "100%" }}>
            <Stack justifyContent="center" sx={{ height: "100%" }} alignItems={{xs:"center"}}> 
              <Typography fontWeight={800} fontSize={{ md: 70, xs: 35 }}>
                Welcome to{" "}
              </Typography>
              <Link to="/">
                <Typography
                  sx={{ "&>span": { color: "black" } }}
                  fontWeight={700}
                  fontSize={{ md: 28, xs: 20 }}
                  color="primary"
                >
                  food<span>wagon</span>
                </Typography>
              </Link>
            </Stack>
          </Container>
        </Grid>
        <Grid item md={6} xs={12}>
          <Container maxWidth="sm" sx={{ height: "100%" }}>
            <Stack justifyContent="center" height="100%">
              <Stack bgcolor="#373E40" px={5} py={8} borderRadius={2}>
                <form onSubmit={handleSubmit}>
                  <Stack gap={2}>
                    <TextField
                      color="primary"
                      label="E-mail"
                      variant="outlined"
                      type={"email"}
                      InputProps={{sx:{color:"white"}}}
                      InputLabelProps={{sx:{color:"white"}}}
                      onChange={(e) => setEmail(e.target.value)}
                    ></TextField>
                    <TextField
                      sx={{
                        borderColor: "white",
                      }}
                      color="primary"
                      label="Password"
                      variant="outlined"
                      type={"password"}
                      InputProps={{sx:{color:"white"}}}
                      InputLabelProps={{sx:{color:"white"}}}
                      onChange={(e) => setPassword(e.target.value)}
                    ></TextField>
                    <Button
                      sx={{ textTransform: "capitalize" }}
                      variant="contained"
                    >
                      Submit
                    </Button>
                    <Stack flexDirection="row" justifyContent="space-between" sx={{"&>*":{color:"primary.main",fontSize:14, }}}>
                      <Typography>Have no account?</Typography>
                      <Link to="/sign-up">
                       Create an account
                      </Link>
                    </Stack>
                  </Stack>
                </form>
              </Stack>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Login;
