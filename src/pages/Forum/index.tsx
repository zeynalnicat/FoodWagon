import { Button, Container, Divider, FormControl, FormGroup, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import axios from 'axios'
import Loading from '../../components/Loading'

const url = "http://localhost:3000/form"
const Form = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [users , setUsers] = useState<any>([])
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comment : '',
        
      });

      useEffect(()=>{
        axios.get(url).then(({data})=>{
            setUsers(data)  
        })
        setIsLoading(false)

      },[])

     
      const handleChange = (event:any) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
    
        setFormData({
          ...formData,
          [name]: newValue,
        });
      };
    
      const handleSubmit = (event:any) => {
        event.preventDefault();
        
             axios.post(url,{
                id : v4(),
                firstname : formData.firstName,
                lastname : formData.lastName,
                email: formData.email,
                comment: formData.comment,

             }).then(()=>{
                alert(`Succesfuly sent`)
                setFormData({firstName:"",lastName:"",email:"",comment:""})
             }).catch((error)=>{
                console.error('Error sending POST request', error)
             })
      };
  return (
    <Stack  >
        <Header/>
        <Banner title='Forum' subtitle='Rate your journey'/>
        <Container maxWidth="xs" sx={{py:10}} >
        <form onSubmit={handleSubmit}>
  <FormControl>
    <FormGroup sx={{"&>textarea":{marginBottom:"16px",border:"1px solid rgba(0,0,0,0.3)" , p:1 ,borderRadius:1,fontFamily:"inherit" , fontSize:14, resize:"block", overflow :"scroll"}}}>
      <TextField
        name="firstName"
        label="First Name"
        variant="outlined"
        value={formData.firstName}
        onChange={handleChange}
        required
        sx={{ width: '100%', marginBottom: '16px' }}
      />
      <TextField
        name="lastName"
        label="Last Name"
        variant="outlined"
        value={formData.lastName}
        onChange={handleChange}
        required
        sx={{ maxWidth: '100%', marginBottom: '16px' }}
      />
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        sx={{ width: '100%', marginBottom: '16px' }} 
      />
      
   
    <textarea style={{height:200,resize:"none"}}
      name="comment"
      placeholder="Comment... *"
      onChange={handleChange}
      value={formData.comment}
    ></textarea>
  
    </FormGroup>
    <Button type="submit" variant="contained" color="primary">
      Submit
    </Button>
  </FormControl>
</form>

        </Container>

        <Container sx={{pb:10}}>
            <Typography fontWeight={700} py={2}>
                Comments: {users.length==0?"0":users.length}
            </Typography>
           {
             isLoading && <Loading/>
           }
           {users.map((user:any)=>{
            return(
                <Stack
                key={user.id}
                sx={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '16px',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Stack flexDirection="row" gap={2} alignItems="center">
                  <Typography fontWeight={700}>{user.firstname + " " + user.lastname}</Typography>
                  <Typography fontSize={12}>{user.email}</Typography>
                </Stack>
                  <Divider sx={{padding:1}}/>
                  <Typography  padding={2} sx={{overflowWrap: 'break-word'}}>{user.comment}</Typography>
              </Stack>
          
            )
           })}
        </Container>
        <Footer/>
    </Stack>
  )
}

export default Form
