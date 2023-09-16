import {
  Badge,
  Button,
  Container,
  Grid,
  IconButton,
  Popper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { cart } from "../../pages/Cart/db.json";
import food from "../Foods/food.json";
import logo from "../../assets/Header/logo-burger.png";
import { LocationOn } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

interface FoodItems {
  id?: number;
  name?: string;
  price?: number;
}
const Header = () => {
  const [cartShow, setCartShow] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setSearch(!search);
  };
  const [search, setSearch] = useState(false);
  const [cartSize, setCartSize] = useState(0);
  const [searchResult, setSearchResult] = useState("");
  const [foundFood, setFoundFood] = useState<FoodItems | null>(null);

  useEffect(() => {
    setCartSize(cart.length);
  }, []);

  useEffect(() => {
    if (searchResult.trim() === "") {
      setFoundFood(null);
    } else {
      const result = food.find(({ name }) =>
        name.toLowerCase().includes(searchResult.toLowerCase())
      );

      if (result !== undefined && result !== null) {
        setFoundFood(result as FoodItems);
      }
    }
  }, [searchResult]);

  return (
    <Container>
      <Stack
        flexDirection={{ md: "row", xs: "column" }}
        justifyContent="space-between"
        alignItems="center"
        gap={{ md: 0, xs: 1 }}
        p={{ md: 0, xs: 2 }}
      >
        <Link to="/">
          <Stack flexDirection="row" alignItems="center">
            <img src={logo} style={{ height: 90 }} />
            <Typography
              sx={{ "&>span": { color: "secondary.main" } }}
              fontWeight={700}
              fontSize={20}
              color="primary"
            >
              food<span>wagon</span>
            </Typography>
          </Stack>
        </Link>

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
          sx={{
            "&>svg": { color: "secondary.main" },
            "&>button": { boxShadow: "0px 2px 2px" },
          }}
          gap={2}
        >
          <IconButton color="secondary" onClick={handleClick}>
            <SearchIcon />
          </IconButton>
          {search && (
            <Stack position="relative">
              <TextField
                label="Search food"
                variant="outlined"
                size="small"
                onChange={(e) => setSearchResult(e.target.value)}
              ></TextField>
            </Stack>
          )}

          {search && foundFood && (
            <Popper
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Stack
                sx={{
                  padding: 2,
                  backgroundColor: "white",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  borderRadius: 4,
                }}
              >
                <Grid container spacing={2} key={foundFood.id}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">
                      {foundFood.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">
                      ${foundFood.price}
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </Popper>
          )}

          <Link to="/cart">
            <Badge badgeContent={cartSize} color="secondary">
              <Stack position="relative">
                <IconButton
                  onMouseEnter={() => setCartShow(true)}
                  onMouseLeave={() => setCartShow(false)}
                >
                  <ShoppingCartIcon color="primary" />
                </IconButton>
              </Stack>
            </Badge>
          </Link>
          {cart.length == 0 && cartShow && (
            <Stack
              position="absolute"
              top={70}
              right={200}
              bgcolor="#eee"
              p={2}
              borderRadius={4}
            >
              <Typography>No item in your cart</Typography>
            </Stack>
          )}
          <Link to="/login">
            <Stack color="secondary.main">
              <Stack
                flexDirection="row"
                border="1px solid"
                p={1}
                borderRadius={2}
              >
                <PersonIcon />
                <Typography
                  color="secondary.main"
                  textTransform="capitalize"
                  fontWeight={700}
                >
                  Login
                </Typography>
              </Stack>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Header;
