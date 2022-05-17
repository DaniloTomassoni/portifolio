import React from 'react'
import { Box } from '@mui/material'
import RouteComponent from './components/routecomponent/RouteComponent'
export default function App() {
  return (
    <Box className='App' sx={{
      textAlign:'center',
      width:'100%',
      height:'100vh',
      background:'#242526'
      }}>
        <RouteComponent/>
    </Box>
  )
}
