import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import {
  Box,
  Typography,
} from  '@mui/material'
//import img2 from '../../img/img2.jpg'

export default function Home() {
  return (
    <div style={{background:'#242526'}}>
        <NavBar/>
        <Box sx={{
          
          maxWidth:'100%',
          maxHeight:'100vh',
          width:'100%',
          height:'90vh',
          //backgroundImage:`url(${img2})`,
          backgroundSize:"100%",
          backgroundRepeat:'no-repeat',
          textAlign:'center'
        
        }}>
          <Typography sx={{
            fontFamily:'fira code, sans-serif',
            fontSize:30,
            color:'#000'
          }}>Hello Word!!!</Typography>
        </Box>
    </div>
  )
}