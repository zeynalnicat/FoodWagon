import { Container, Stack, Typography } from '@mui/material'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'


const Careers = () => {
  return (
    <Stack>
        <Header/>
        <Banner title='Careers' subtitle=''/>
         <Container sx={{py:10}}> 
            <Typography fontWeight={800} fontSize={30}>Coming soon ... </Typography>
         </Container>
        <Footer/>
    </Stack>
  )
}

export default Careers
