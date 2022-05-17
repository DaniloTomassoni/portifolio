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

const texto = 'Me chamo DANILO AUGUSTO TOMASSONI, tenho 25 anos, nascido em Santa Rita do Sapucaí, Minas Gerais, Atualmente estou me graduando em Análises e Desenvolvimento de Sistemas com objetivo de desenvolver tecnicas e me aprofundar mais na area de TI com objetivo de aprender conceitos e ser futuramente um full-stack!'

export default function About() {
  return (
    <div>
        <NavBar/>
        <Box >
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
    </div>
  )
}
