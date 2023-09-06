import { Container, Stack } from "@mui/material"
import food1 from "../../assets/FoodDiscount/food1.png"
import food2 from "../../assets/FoodDiscount/food2.png"
import food3 from "../../assets/FoodDiscount/food3.png"
import food4 from "../../assets/FoodDiscount/food4.png"
import DiscountInfo from "./info"


const food = [
    {   
        id : 0,
        imgSrc: food1,
        discount: 15,
        foodName: "Greys Vage",
        expireDate : 6
    },
    
    {
        id : 1,
        imgSrc: food2,
        discount: 10,
        foodName: "Greys Vage",
        expireDate : 6
    },
    
    {
        id : 2,
        imgSrc: food3,
        discount: 25,
        foodName: "Greys Vage",
        expireDate : 7
    },
    
    {
        id : 3,
        imgSrc: food4,
        discount: 20,
        foodName: "Greys Vage",
        expireDate : 8
    },
    
]


const FoodDiscount = () => {
  return (
   <Container sx={{my:10}}>
       <Stack flexDirection="row" flexWrap="wrap" gap={3}>
     {

        food.map((el)=>{
            return (
                <DiscountInfo key={el.id} imgSrc={el.imgSrc} discount={el.discount} expireDate={el.expireDate} foodName={el.foodName}/>
                )
            })
     }
            </Stack>
   </Container>
  )
}

export default FoodDiscount
