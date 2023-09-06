import { Box, Stack, Typography } from "@mui/material"


interface IProps{
    imgSrc:React.ReactElement<any,string>,
    howName : string , 
    description : string
}

const HowInfo = ({imgSrc , howName, description}:IProps) => {
  return (
   <Stack justifyContent="center" gap={1} >
    <Box color="secondary.main" >
    { imgSrc }
    </Box>
    <Typography fontWeight={700}>{howName}</Typography>
    <Typography color="#9E9E9E">{description}</Typography>
    
   </Stack> 
  )
}

export default HowInfo
