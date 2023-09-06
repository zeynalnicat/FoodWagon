import {
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MopedIcon from "@mui/icons-material/Moped";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useState } from "react";
import { LocationOn } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";


const Banner = () => {
  const [accordion, setAccordion] = useState(true);
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "secondary.main",
        height: { md: "calc(100vh - 100px)", xs: "calc(100vh - 170px)" },
      }}
    >
      <Container sx={{ height: "100%" }}>
        <Stack maxWidth={800} height="100%" justifyContent="center" gap={2} position="relative">
          <Typography fontSize={70} fontWeight={800} color="white">
            Are you starving?
          </Typography>
          <Typography color="#504F4F">
            Within a few clicks, find meals that are accessible near you
          </Typography>

          <Stack bgcolor="white" p={3} borderRadius={3}>
            <Stack flexDirection="row" gap={1}>
              <Button variant="contained" onClick={()=>setAccordion(true)}>
                <Stack gap={0.5} flexDirection="row">
                  <MopedIcon />
                  <Typography fontWeight={700} textTransform="capitalize">
                    Delivery
                  </Typography>
                </Stack>
              </Button>

              <Button variant="contained" onClick={()=>setAccordion(false)}>
                <Stack gap={0.5} flexDirection="row">
                  <ShoppingBagIcon />
                  <Typography fontWeight={700} textTransform="capitalize">
                    Pickup
                  </Typography>
                </Stack>
              </Button>
            </Stack>
            <Divider sx={{ p: 1 }} />
            { (accordion && (
              <Stack my={3} flexDirection="row" gap={2}>
                <TextField
                  InputProps={{ sx: { borderRadius: 2 } }}
                  fullWidth
                  label={
                    <Stack flexDirection="row" alignItems="center" gap={1} sx={{"&>svg":{color:"red"}}}>
                      <LocationOn />
                      Enter Your Adddress
                    </Stack>
                  }
                  variant="filled"
                />

                <Button variant="contained">
                  <Stack flexDirection="row" alignItems="center" color="white" px={5} gap={1} >
                    <SearchIcon/>
                    <Typography textTransform="capitalize" fontWeight={700}>Food</Typography>                    
                  </Stack>
                </Button>
              </Stack>
            )) || <Stack>  </Stack>}
          </Stack>
        </Stack>
    
      </Container>
    </Container>
  );
};

export default Banner;
