import { Stack, Container, Typography } from '@mui/material'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const NotFound = () => {
 
    return (
        <Stack>
            <Header/>
            <Banner title='404' subtitle='NOT FOUND'/>
             <Container sx={{py:10}}> 
                <Typography textAlign="center" fontWeight={800} fontSize={35}>404 Not Found </Typography>
             </Container>
            <Footer/>
        </Stack>
      )
  
}

export default NotFound
