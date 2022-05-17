import React, {useState} from 'react'
import NavBar from '../../components/navbar/NavBar'
import { 
  Box,
  IconButton,
  Drawer
} from '@mui/material'

import {
  ArrowBack,
  Construction
} from '@mui/icons-material'

import Contador from '../../components/contador/Contador'
import IMC from '../../components/imc/IMC'

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [mapComponent, setMapComponet] = useState(null)
  const toggleOpen = (linked) =>{
    setOpen(prev => !prev)
    if(linked === 'contador'){
        setMapComponet(<Contador/>)
    }

    if(linked === 'imc'){
      setMapComponet(<IMC/>)
    }
  }
  return (
    <div style={{background:'#242526'}}>
        <NavBar/>
        <Box sx={{
          maxWidth:'100%',
          maxHeight:'100vh',
          width:'100%',
          height:'90vh',
          backgroundSize:"100%",
          textAlign:'center'
        
        }}>
          <Box>
              <IconButton onClick={toggleOpen}>
                  <Construction sx={{fontSize:50}}/>
                </IconButton>
                  {mapComponent}
          </Box>
          <Box>
              <Drawer open={open}>
                  <Box>
                      <IconButton onClick={toggleOpen} ><ArrowBack/></IconButton>
                  </Box>
                  <Box>
                      <IconButton onClick={() => toggleOpen('contador')} >Contador</IconButton>
                  </Box>
                  <Box>
                      <IconButton onClick={() => toggleOpen('imc')} >IMC</IconButton>
                  </Box>
              </Drawer>
          </Box>
        </Box>
    </div>
  )
}
