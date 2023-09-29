import { Stack, Container } from "@mui/material"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import me from "../../assets/Team/nijatzeynalli.jpg"
import seymur from "../../assets/Team/seymurzeynalli.jpg"

import TeamInfo from "./teamInfo"


const members = [
    {
        id:0 ,
        name: "Nijat Zeynalli",
        imgSrc : me ,
        profession:"Front-end Developer, Project Manager",
        birth: "Baku",
        age: 19,
        university:"Strausbourg and ADNSU",
        contact:"nicatt.zeynalli@gmail.com",
        linkedn: "https://az.linkedin.com/in/nicat-zeynalli-9295b2289",
        instagram : "https://www.instagram.com/affuross/",
        github: "https://github.com/zeynalnicat"
        
    },
    {
        id:0 ,
        name: "Seymur Zeynalli",
        imgSrc : seymur ,
        profession:"Back-end Developer, Database administrator",
        birth: "Baku",
        age: 19,
        university:"ADNSU",
        contact:"seymur.2004.78@gmail.com",
        linkedn : "https://az.linkedin.com/in/seymur-zeynalli-593b23266",
        github: "https://github.com/SeymurGIT"
    },
]

const Team = () => {
 
    return (
        <Stack>
          <Header/>
          <Banner title='Team' subtitle='Meet our team' />
           <Container sx={{py:10}}>
            {
                members.map((member)=>{
                    return(
                        <TeamInfo key={member.id} {...member}/>
                    )
                })
            }
           </Container>
    
          <Footer/>
        </Stack>
      )
  
}

export default Team
