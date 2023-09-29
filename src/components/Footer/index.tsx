import {
  Facebook,
  GitHub,
  Instagram,
  Mail,
  Twitter,
} from "@mui/icons-material";
import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const cities = [
  {
    id: 0,
    name: "San Francisco",
  },
  {
    id: 1,
    name: "New York City",
  },
  {
    id: 2,
    name: "Los Angeles",
  },
  {
    id: 3,
    name: "Chicago",
  },
  {
    id: 4,
    name: "Miami",
  },
  {
    id: 5,
    name: "Seattle",
  },
  {
    id: 6,
    name: "Boston",
  },
  {
    id: 7,
    name: "Austin",
  },
  {
    id: 8,
    name: "Denver",
  },
  {
    id: 9,
    name: "Atlanta",
  },
  {
    id: 10,
    name: "Philadelphia",
  },
  {
    id: 11,
    name: "Phoenix",
  },
  {
    id: 12,
    name: "Portland",
  },
  {
    id: 13,
    name: "Dallas",
  },
  {
    id: 14,
    name: "Houston",
  },
  {
    id: 15,
    name: "Las Vegas",
  },
  {
    id: 16,
    name: "Miami Beach",
  },
  {
    id: 17,
    name: "San Diego",
  },
  {
    id: 18,
    name: "Detroit",
  },
  {
    id: 19,
    name: "Nashville",
  },
  {
    id: 20,
    name: "Minneapolis",
  },
  {
    id: 21,
    name: "San Antonio",
  },
  {
    id: 22,
    name: "Raleigh",
  },
  {
    id: 23,
    name: "Salt Lake City",
  },
  {
    id: 24,
    name: "Kansas City",
  },
];

const footerLink = [
  {
    id: 0,
    header: "Company",
    links: [
      {
        name: "About us",
        link: "/about-us",
      },
      {
        name: "Team",
        link: "/team",
      },
      {
        name: "Careers",
        link: "/careers",
      },
      {
        name: "Blog",
        link: "/blog",
      },
    ],
  },
  {
    id: 1,
    header: "Contact",
    links: [
      {
        name: "Help & Support",
        link: "/help",
      },
      {
        name: "Form",
        link: "/form",
      },
      {
        name: "Ride with us",
        link: "/ride-with-us",
      },
    ],
  },
  {
    id: 2,
    header: "Legal",
    links: [
      {
        name: "Terms & Conditions",
        link: "/terms",
      },
      {
        name: "Refund & Cancellation",
        link: "/",
      },
      {
        name: "Privacy Policy",
        link: "/",
      },
      {
        name: "Cookie Policy",
        link: "/",
      },
    ],
  },
];

const Footer = () => {
  const textFieldStyles = {
    width: "300px",
    backgroundColor: "#ADADAD",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#ADADAD",
      borderRadius: "10px",
    },
  };
  const inputStyles = {
    backgroundColor: "transparent",
    borderRadius: "10px",
    "&:hover": {
      borderRadius: "10px",
    },
  };
  return (
    <Stack bgcolor="#212121">
      <Container>
        <Stack py={6}>
          <Typography py={2} color="#FFFFFF" fontWeight={800}>
            Our top cities
          </Typography>
          <Stack>
            <Grid container>
              {cities.map((city) => {
                return (
                  <Grid
                    fontSize={15}
                    item
                    md={2.4}
                    sm={3}
                    xs={6}
                    color="#B3AFC4"
                    key={city.id}
                  >
                    {city.name}
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
          <Divider sx={{ mt: 8, bgcolor: "#424242" }} />
        </Stack>

        <Grid container gap={12}>
          <Grid item md={5}>
            <Stack
              flexDirection="row"
              gap={{ md: 10, xs: 1 }}
              justifyContent="center"
            >
              {footerLink.map((it) => {
                return (
                  <Stack
                    key={it.id}
                    sx={{
                      "&>a": {
                        textDecoration: "none",
                        color: "#B3AFC4",
                        fontSize: 15,
                      },
                    }}
                  >
                    <Typography py={2} color="#FFFFFF" fontWeight={800}>
                      {it.header}
                    </Typography>
                    {it.links &&
                      it.links.map((link) => {
                        return <Link to={link.link}>{link.name}</Link>;
                      })}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>

          <Grid item md={6} xs={12} sx={{ "&>*": { color: "#5A5766" } }}>
            <Stack>
              <Typography>FOLLOW US</Typography>
              <Stack flexDirection="row">
                <a href="https://www.instagram.com/affuross/">
                  <IconButton>
                    <Instagram sx={{ color: "#5A5766" }} />
                  </IconButton>
                </a>

                <a href="https://github.com/zeynalnicat">
                  <IconButton>
                    <GitHub />
                  </IconButton>
                </a>
                <a href="https://twitter.com/affuros">
                  <IconButton sx={{ color: "#5A5766" }}>
                    <Twitter />
                  </IconButton>
                </a>
              </Stack>

              <Typography py={3}>
                Receive exclusive offers in your mailbox
              </Typography>
              <Stack flexDirection="row" gap={3}>
                <TextField
                  color="secondary"
                  label={
                    <Stack flexDirection="row" alignItems="center" gap={1}>
                      <Mail />
                      Enter your email
                    </Stack>
                  }
                  InputProps={{ sx: inputStyles }}
                  variant="outlined"
                  sx={textFieldStyles}
                />
                <Button
                  sx={{
                    textTransform: "capitalize",
                    boxShadow: "0 2px 5px rgba(255, 184, 0, 1)",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  color="secondary"
                  variant="contained"
                >
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 8, bgcolor: "#424242" }} />
        <Stack
          py={2}
          flexDirection="row"
          justifyContent="space-between"
          color="#F5F5F5"
          sx={{ "&>*": { fontSize: 12 } }}
          alignItems="center"
        >
          <Stack
            flexDirection="row"
            alignItems="center"
            gap={1}
            color="#F5F5F5"
            sx={{ "&>*": { fontSize: 12 } }}
          >
            <Typography>All rights Reserved </Typography>
            <Typography fontWeight={700}>
              {" "}
              Foodwagon {new Date().getFullYear()}
            </Typography>
          </Stack>
          <Typography>
            Made with 💛 by{" "}
            <span style={{ fontWeight: 700 }}> Nijat Zeynalli </span>
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
