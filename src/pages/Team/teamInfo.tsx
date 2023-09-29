import { GitHub, Instagram, LinkedIn } from "@mui/icons-material"
import { Stack, Grid, Typography, IconButton } from "@mui/material"
interface IProps {
    imgSrc : string , 
    name: string , 
    profession:string,
    birth : string ,
    age:number,
    university?: string|null,
    contact : string,
    linkedn?: string,
    instagram? :string,
    github? : string
    
}

const TeamInfo = ({imgSrc , name , profession,birth,age,university=null,contact,linkedn,instagram,github}:IProps) => {
  return (
    <Stack sx={{padding:5, boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1) ", borderRadius: '8px', transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    },}}>
<Grid container spacing={{md:18,xs:0}}>
<Grid item md={2} sm={4}  sx={{"&>img":{width:150 , height:270 , objectFit:"fill", }}}>
  <img src={imgSrc} alt={name} />
</Grid>

<Grid item md={10} sm={8}>
  <Stack py={5}>
  <Typography fontSize={20} fontWeight={800}>{name}</Typography>
  <Typography fontSize={12} fontWeight={700}>{profession}</Typography>
  </Stack>

  <Stack>
      <Typography fontWeight={700} fontSize={15} >Birth : <span style={{fontWeight:500}}>{birth}</span> </Typography>
      <Typography fontWeight={700}  fontSize={15}  >Age : <span style={{fontWeight:500}}>{age}</span></Typography>
      <Typography fontWeight={700}  fontSize={15}  >University :<span style={{fontWeight:500}}> {university?university:NaN}</span></Typography>
      <Typography fontWeight={700}  fontSize={15}  >E-mail : <span style={{fontWeight:500}}>{contact}</span></Typography>
      
      <Stack p={2} flexDirection="row">

        {
        linkedn && <a href={linkedn}> <IconButton>
            <LinkedIn/>
        </IconButton></a>
      }
      {
        instagram && <a href={instagram}>
            <IconButton><Instagram/></IconButton>
        </a>
      }

      {github && <a href={github}>
        <IconButton><GitHub/></IconButton></a>}
        </Stack>
  </Stack>
  
 
</Grid>
</Grid>
</Stack>
  )
}

export default TeamInfo
