import { Box, Stack, Typography } from "@mui/material"

interface IProps {
    imgSrc : string,
    discount:number,
    foodName : string,
    expireDate : number
}

const DiscountInfo = ({imgSrc,discount,foodName,expireDate}:IProps) => {
  return (
    
    <Stack>
        <Box position="relative" sx={{"&>img":{borderBottomLeftRadius:10,borderTopRightRadius:10}}}>
            <img src={imgSrc} alt={imgSrc}/>
            <Stack p={2} bgcolor="secondary.main" position="absolute" bottom={6} left={0} sx={{borderBottomLeftRadius:10,borderTopRightRadius:10}} flexDirection="row" alignItems="center" >
                <Typography fontWeight={700} color="white" fontSize={50}>{discount}</Typography>
                <Stack color="white"> <Typography>%</Typography> <Typography>Off</Typography></Stack>
            </Stack>
        </Box>

        <Typography fontWeight={700}>{foodName}</Typography>
        <Box color="warning.main" bgcolor="#EEC4A3" borderRadius={1} py={0.5} px={2} sx={{width:"fit-content"}}>
        <Typography fontWeight={700}>{expireDate} days remaning</Typography>
        </Box>
    </Stack>
  )
}

export default DiscountInfo
