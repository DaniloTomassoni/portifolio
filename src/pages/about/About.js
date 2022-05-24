import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import {
  Avatar,
  Box,
  Container,
  Stack,
  Typography,
  Link
} from '@mui/material'
import DANILO from '../../img/danilo1.jpg'

import {
  Facebook,
  Instagram,
  LinkedIn,
  GitHub
} from '@mui/icons-material'
import Footer from '../../components/footer/Footer'

const texto = "My name is DANILO AUGUSTO TOMASSONI, I'm 25 years old, born in Santa Rita do Sapucaí, Minas Gerais, I'm currently graduating in Systems Analysis and Development with the objective of developing techniques and delving deeper into the IT area with the objective of learning concepts and being in the future a full-stack!"

export default function About() {
  return (
    <div>
        <NavBar/>
        <Box sx={{
          maxWidth:'100%',
          maxHeight:'100vh',
          width:'100%',
          height:'90vh',
          backgroundSize:"100%",
          textAlign:'center'
        
        }}>
          <Stack direction='row' sx={{justifyContent:'center', padding:5}}>
            <Avatar src={DANILO} sx={{width:250, height:250}}></Avatar>
          </Stack>
          <Container sx={{width:'70%', background:'#242526'}}>
            <Typography fontFamily='-moz-initial cursive' fontSize={15}>{texto}</Typography>
          </Container>
          <Stack direction='row' sx={{justifyContent:'center', padding:5}}>
            <Link href="https://www.facebook.com/profile.php?id=100013220469571" target="_blank" rel="noreferrer"><Facebook sx={{fontSize:60}}/></Link>
            <Link href="https://instagram.com/danilo_tomassoni?utm_medium=copy_link" target="_blank" rel="noreferrer"><Instagram sx={{fontSize:60}}/></Link>
            <Link href="https://www.linkedin.com/in/danilo-augusto-tomassoni-3a6bb7234" target="_blank" rel="noreferrer"><LinkedIn sx={{fontSize:60}}/></Link>
            <Link href="https://github.com/DaniloTomassoni" target="_blank" rel="noreferrer"><GitHub sx={{fontSize:60}}/></Link>
          </Stack>
        </Box>
        <Footer/>
    </div>
  )
}
