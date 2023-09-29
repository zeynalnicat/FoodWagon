import { Container, Stack, Typography } from '@mui/material'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'


const Blog = () => {
  return (
    <Stack>
        <Header/>
        <Banner title='Blog' subtitle='Make your own personal blog'/>
         <Container sx={{py:10}}> 
            <Typography fontWeight={800} fontSize={30}>Coming soon ... </Typography>
         </Container>
        <Footer/>
    </Stack>
  )
}

export default Blog
