import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import {
  Box,
} from '@mui/material'
//import img2 from '../../img/img2.jpg'

export default function Contact() {
  return (
    <div style={{background:'#242526'}}>
        <NavBar/>
        <Box sx={{
          maxWidth:'100%',
          maxHeight:'100vh',
          width:'100%',
          height:'90vh',
          //backgroundImage:"url(https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c)",
          backgroundSize:"100%",
          //backgroundRepeat:'no-repeat',
          textAlign:'center'
        
        }}>
          
        </Box>
    </div>
  )
}
