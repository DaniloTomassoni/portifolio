import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import {
  Box,
  Stack,
  Avatar,
  Tooltip,
  Typography,
  Button
} from '@mui/material'
import {
  WhatsApp,
  Mail,
  GetApp,
  Phone,
} from '@mui/icons-material'
import src_qrcode from '../../img/qrcodeContact.png'
import href_pdf from '../../documents/daniloaugustotomassoni.pdf'
import Footer from '../../components/footer/Footer'
export default function Contact() {
  const downloadCv = () =>{
    var link = document.createElement('a')
    link.download = 'daniloaugustotomassoni.pdf'
    link.href = href_pdf
    link.click()
  }
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
          <Tooltip title="QRCODE WhatsApp">
            <Typography>
              <WhatsApp sx={{fontSize:50}}/>
            </Typography>
          </Tooltip>
          <Stack direction='row' sx={{justifyContent:'center'}}>
              <Avatar src={src_qrcode} sx={{width:300, height:300}}></Avatar>
          </Stack>
          <Tooltip title="Phone Contact">
              <Phone sx={{fontSize:50}}/>
          </Tooltip>
          <Typography>
            +5535998832984
          </Typography>
          <Tooltip title="E-mail Contact">
              <Mail sx={{fontSize:50}}/>
          </Tooltip>
          <Typography>
            danilothomassoni@gmail.com
          </Typography>
          <Typography>Download CV</Typography>
          <Button
          variant='outlined'
          startIcon={<GetApp/>}
          onClick={downloadCv}
          >DOWNLOAD</Button>
        </Box>
        <Footer/>
    </div>
  )
}
