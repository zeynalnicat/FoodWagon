
import { Container, Stack} from "@mui/material"
import sandwitch from "../../assets/Deals/sandwitch.png"
import chicken from "../../assets/Deals/chicken.png"
import pizza from "../../assets/Deals/pizza.png"

import DealInfo from "./dealInfo"


const deals = [
  {
    id:0,
    name:"Best deals ",
    imgSrc : sandwitch,
    subname:"Crispy Sandwiches",
    description:"Enjoy the large size of sandwiches. Complete perfect slice of sandwiches"
  },
  
  {
    id:1,
    name:"Celebrate  parties with  ",
    imgSrc : chicken ,
    subname:"Fried Chicken",
    isRight: false,
    description:"Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken."
  },
  {
    id:2,
    name:"Wanna eat hot & spicy ",
    imgSrc : pizza,
    subname:"Pizza?",
    description:"Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals."
  },

]

const Deals = () => {
  return (
    <Container sx={{my:10}} >
      <Stack gap={8}>

      {deals.map((deal)=>{
        return <DealInfo key={deal.id} {...deal}/>      })}
        </Stack>
    </Container>
  )
}

export default Deals
