import { Container, Grid, Stack, Typography } from "@mui/material";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import logo from "../../assets/Header/logo-burger.png";

const about = [
  {
    id: 0,
    header: "Welcome to Food Wagon",
    content:
      "At Food Wagon, we're dedicated to making your dining experience easier, faster, and more satisfying than ever before. Our online platform empowers you to effortlessly order your favorite dishes from a variety of restaurants, all from the comfort of your own home. With Food Wagon, we've redefined food delivery, putting the customer's needs at the forefront of our service.",
  },
  {
    id: 1,
    header: "Easy and Convenient Ordering",
    content:
      "Our user-friendly interface ensures that ordering food is a breeze. No more navigating through complex websites or getting lost in a sea of options. With Food Wagon, you'll find what you crave with just a few clicks. Say goodbye to the hassle of traditional dining.",
  },
  {
    id: 2,
    header: " Lightning-Fast and Reliable Service",
    content:
      "We understand that when you're hungry, you don't want to wait. Our team of dedicated couriers is committed to delivering your order swiftly and with care. We guarantee your food arrives hot, fresh, and ready to enjoy. Your satisfaction is our top priority.",
  },
  {
    id: 3,
    header: "Your Order, Your Way",
    content:
      "Customization is key. At Food Wagon, you have the flexibility to personalize your orders to your heart's content. Swap ingredients, adjust portions, and make special requests. We're here to ensure your meal is just the way you like it.",
  },
  {
    id: 4,
    header: "Trustworthy and Reliable",
    content:
      "We stand by the quality of our service. If, for any reason, your order doesn't meet your expectations, our reliable customer support team is here to assist you. We offer a hassle-free refund policy to ensure your peace of mind.",
  },
];

const AboutUs = () => {
  return (
    <Stack>
      <Header />
      <Banner title="About Us" subtitle="" />
      <Container sx={{ py: 10 }}>
        <Stack
          sx={{
            padding: 5,
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1) ",
            borderRadius: "8px",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Grid container spacing={{ md: 18, xs: 0 }}>
            <Grid
              item
              md={2}
              sm={4}
              sx={{ "&>img": { width: 150, height: 270, objectFit: "fill" } }}
            >
              <img src={logo} alt="logo" />
            </Grid>

            <Grid item md={10} sm={8}>
              <Stack py={3}>
                <Typography fontSize={20} fontWeight={800}>
                  FoodWagon
                </Typography>
                <Typography fontSize={12} fontWeight={700}>
                  Reliable,fast service
                </Typography>
              </Stack>

              <Stack>
                <Typography fontStyle="italic">
                  Food Wagon helps users have easy opportunities to purchase
                  their food-orders online.Thanks to our easy,fast and reliable
                  service, it is assured that , our customers benefit and get
                  satisfied. Our fast courriers make sure that they deliver in
                  time and not "cold". Our easy user-interfaces assure that
                  people do not get stuck in pages-looking for their needs in
                  the web .The reliable service make sure people to have their
                  refund in case they have not got what they'd ordered.{" "}
                </Typography>
              </Stack>
              
              <Stack py={10} gap={2}>

              {about.map((text) => {
                  return (
                      <Stack key={text.id}>
                    <Typography fontSize={15} fontWeight={800}>
                     {text.header}
                    </Typography>
                    <Typography>
                        {text.content}
                    </Typography>
                  </Stack>
                );
            })}
            </Stack>

              <Stack py={5}>
                <Typography fontWeight={900} fontSize={10}>
                  The website has been designed using React JS + TypeScript.{" "}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>

      <Footer />
    </Stack>
  );
};

export default AboutUs;
