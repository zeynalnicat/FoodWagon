import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import food1 from "../../assets/FeaturedRestaurants/food1.png";
import food2 from "../../assets/FeaturedRestaurants/food2.png";
import food3 from "../../assets/FeaturedRestaurants/food3.png";
import food4 from "../../assets/FeaturedRestaurants/food4.png";
import food5 from "../../assets/FeaturedRestaurants/food5.png";
import food6 from "../../assets/FeaturedRestaurants/food6.png";
import food7 from "../../assets/FeaturedRestaurants/food7.png";
import food8 from "../../assets/FeaturedRestaurants/food8.png";
import DiscountInfo from "../FoodDiscount/info";
import res1 from "../../assets/FeaturedRestaurants/foodworld.png";
import res2 from "../../assets/FeaturedRestaurants/pizzahub.png";
import res3 from "../../assets/FeaturedRestaurants/donutshut.png";
import res4 from "../../assets/FeaturedRestaurants/donutsubway.png";
import res5 from "../../assets/FeaturedRestaurants/ruby.png";
import res6 from "../../assets/FeaturedRestaurants/kfc.png";
import res7 from "../../assets/FeaturedRestaurants/red.png";
import res8 from "../../assets/FeaturedRestaurants/tacobell.png";

const features = [
  {
    id: 0,
    imgSrc: food1,
    featureRes: "Foodworld",
    expireDate: "Opens tommorrow",
    star: 46,
    featureImg: res1,
    discount: 20,
  },
  {
    id: 1,
    imgSrc: food2,
    featureRes: "PizzaHub",
    expireDate: "Opens tommorrow",
    star: 40,
    featureImg: res2,
    discount: 15,
  },
  {
    id: 2,
    imgSrc: food3,
    featureRes: "Donuts Hut",
    expireDate: "Open Now",
    star: 20,
    featureImg: res3,
    discount: 10,
  },
  {
    id: 3,
    imgSrc: food4,
    featureRes: "Donuts Hut",
    expireDate: "Open Now",
    star: 50,
    featureImg: res4,
    discount: 15,
  },
  {
    id: 4,
    imgSrc: food5,
    featureRes: "Ruby Tuesday",
    expireDate: "Open Now",
    star: 26,
    featureImg: res5,
    discount: 10,
  },
  {
    id: 5,
    imgSrc: food6,
    featureRes: "Kuakata Fried Chicken",
    expireDate: "Open Now",
    star: 53,
    featureImg: res6,
    discount: 25,
  },
  {
    id: 6,
    imgSrc: food7,
    featureRes: "Red Square",
    expireDate: "Opens tommorrow",
    star: 45,
    featureImg: res7,
    discount: 10,
  },
  {
    id: 7,
    imgSrc: food8,
    featureRes: "Taco Bell",
    expireDate: "Open Now",
    star: 35,
    featureImg: res8,
    discount: 10,
  },
];

const FeaturedRestaurants = () => {
  return (
    <Container sx={{ my: 15 }}>
      <Typography py={4} variant="h4" textAlign="center" fontWeight={800}>
        Featured Restaurants
      </Typography>
      <Grid container spacing={3}>
        {features.map((feature) => {
          return (
            <Grid item md={3} sm={4} xs={6}>
              <DiscountInfo
                featureImg={feature.featureImg}
                featured={true}
                imgSrc={feature.imgSrc}
                featureRes={feature.featureRes}
                expireDate={feature.expireDate}
                star={feature.star}
                discount={feature.discount}
              />
            </Grid>
          );
        })}
      </Grid>
      <Stack py={8} flexDirection="row" justifyContent="center">
        <Button variant="contained" color="secondary" >
            <Typography p={1} textTransform="capitalize" color="white">
          View All {">"}
            </Typography>
        </Button>
      </Stack>
    </Container>
  );
};

export default FeaturedRestaurants;
