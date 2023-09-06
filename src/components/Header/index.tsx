import { Button, Container, Stack, Typography } from "@mui/material";
import logo from "../../assets/Header/logo-burger.png";
import { LocationOn } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  return (
    <Container>
      <Stack
        flexDirection={{md:"row", xs:"column"}}
        justifyContent="space-between"
        alignItems="center"
        gap={{md:0,xs:1}}
        p={{md:0, xs:2}}
      >
        <Stack flexDirection="row" alignItems="center" >
          <img src={logo} style={{ height: 90 }} />
          <Typography sx={{"&>span":{color:"secondary.main"}}} fontWeight={700} fontSize={20} color="primary">
            food<span>wagon</span>
          </Typography>
        </Stack>

        <Stack
          flexDirection="row"
          sx={{ "&>svg": { color: "secondary.main" }, "&>p": { fontSize: 12 } }}
          alignItems="center"
          gap={0.5}
        >
          <Typography fontWeight={700}>Deliver to:</Typography>
          <LocationOn />
          <Typography>Current Location </Typography>
          <Typography fontWeight={700}>
            Baku, Qarachukur , Nizami street
          </Typography>
        </Stack>

        <Stack
          flexDirection="row"
          alignItems="center"
          sx={{ "&>svg": { color: "secondary.main" }, "&>button":{boxShadow:"0px 2px 2px"} }}
          gap={0.5}
        >
          <SearchIcon />
          <Typography fontWeight={700}>Search Food</Typography>
          <Button color="secondary" sx={{borderRadius:2, }} variant="outlined" >
            <Stack flexDirection="row">
              <PersonIcon />
              <Typography textTransform="capitalize" fontWeight={700}>Login</Typography>
            </Stack>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Header;
