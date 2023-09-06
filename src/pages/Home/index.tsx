import { Stack } from '@mui/material'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import FoodDiscount from '../../components/FoodDiscount'
import HowWork from '../../components/HowWork'

const Home = () => {
  return (
    <Stack>
        <Header/>
        <Banner/>
        <FoodDiscount/>
        <HowWork/>
          
      </Stack>
  )
}

export default Home
