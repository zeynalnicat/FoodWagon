import { Container, IconButton, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import food1 from "../../assets/PopularItems/food1.png";
import food2 from "../../assets/PopularItems/food2.png";
import food3 from "../../assets/PopularItems/food3.png";
import food4 from "../../assets/PopularItems/food4.png";
import food5 from "../../assets/PopularItems/food5.png";
import ItemsInfo from "./info";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";

const items = [
  {
    id: 0,
    imgSrc: food1,
    name: "Cheese Burger",
    location: "Burger Arena",
    price: 3.88,
  },
  {
    id: 1,
    imgSrc: food2,
    name: "Toffe’s Cake",
    location: "Top Sticks",
    price: 4.0,
  },
  {
    id: 2,
    imgSrc: food3,
    name: "Dancake",
    location: "Cake World",
    price: 1.99,
  },
  {
    id: 3,
    imgSrc: food4,
    name: "Crispy Sandwitch",
    location: "Fastfood Dine",
    price: 3.0,
  },
  {
    id: 4,
    imgSrc: food5,
    name: "Thai  Soup",
    location: "Foody man",
    price: 2.79,
  },
];

const PopularItems = () => {
  const [init, setInit] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <Container maxWidth="xl" sx={{ my: 10 }}>
      <Container>
        <Typography variant="h4" textAlign="center" fontWeight={800}>
          Popular Items
        </Typography>
        <Stack py={3} flexDirection="row" justifyContent="center">
          <IconButton color="secondary" ref={prevButtonRef}>
            <ArrowBackIosIcon />{" "}
          </IconButton>
          <IconButton color="secondary" ref={nextButtonRef}>
            <ArrowForwardIosIcon />{" "}
          </IconButton>
        </Stack>
        <Swiper
          onInit={() => setInit(true)}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onSlideChange={({
            isBeginning,
            isEnd,
          }: {
            isBeginning: boolean;
            isEnd: boolean;
          }) => {
            setIsFirstSlide(isBeginning);
            setIsLastSlide(isEnd);
          }}
        >
          {items.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <ItemsInfo {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Container>
  );
};

export default PopularItems;
