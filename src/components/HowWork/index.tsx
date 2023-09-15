import { Container, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HowInfo from "./HowInfo";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import PaidIcon from '@mui/icons-material/Paid';
import LunchDiningIcon from '@mui/icons-material/LunchDining';


const hows = [
    {
        id: 0,
        imgSrc : <LocationOnIcon fontSize="large"/>,
        howName: "Select location",
        description : "Choose the location where your food will be delivered."
    },
    {
        id: 1,
        imgSrc : <FastfoodIcon fontSize="large"/>,
        howName: "Choose order",
        description : "Choose the location where your food will be delivered."
    },
    {
        id: 2,
        imgSrc : <PaidIcon fontSize="large"/>,
        howName: "Pay advanced",
        description : "Choose the location where your food will be delivered."
    },
    {
        id: 3,
        imgSrc : <LunchDiningIcon fontSize="large"/>,
        howName: "Enjoy meals",
        description : "Choose the location where your food will be delivered."
    },
]

const HowWork = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        background: "linear-gradient(0deg, rgba(255,248,239,1) 0%, rgba(255,255,255,1) 31%, rgba(235,230,219,1) 100%)",
        my: 10,
      }}
    >
      <Container maxWidth="md">
        <Stack p={{md:10 , sm:5}} py={{xs:4}} alignItems="center" gap={4}>
            
        <Typography fontSize={{md:40,xs:20}} color="primary.main" fontWeight={700}>
          How does it work
        </Typography>
        <Stack flexDirection="row" gap={2} flexWrap={{md:"nowrap",xs:"wrap"}}>
            {hows.map((how)=>{
                return(
                    <HowInfo key={how.id} {...how}/>
                )
            })}
        </Stack>
        </Stack>
         
      </Container>
    </Container>
  );
};

export default HowWork;
