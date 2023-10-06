import { ChevronRight } from "@mui/icons-material"
import { Button, Container, Grid, Stack, Typography } from "@mui/material"
import sandwitch from "../../assets/Deals/Image.png"

const Deals = () => {
  return (
    <Container >
        <Grid container spacing={10} sx={{boxShadow: "2px 6px 4px rgba(0, 0, 0, 0.4) ", marginY:4 ,borderRadius: '8px', transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)',
    },}}>
            <Grid item md={4} xs={12} padding={5} >
                <Stack gap={3} padding={4}>

                <Typography fontSize={32} fontWeight={700}>Best Deals <span style={{color:"orange"}}>Crispy Sandwitches</span></Typography>
                <Typography >Enjoy the large size of sandwiches. Complete 
perfect slice of sandwiches.</Typography>

         <Button color="secondary" variant="contained" sx={{color:"white"}} >Proceed to order <ChevronRight/></Button>
                </Stack>
            </Grid>

            <Grid item md={8} xs={12}>
                <Stack>
                <img src ={sandwitch}/>
                </Stack>
            </Grid>

        </Grid>

    </Container>
  )
}

export default Deals
