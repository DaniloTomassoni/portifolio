import React, {useState} from 'react'

import { 
    AppBar,
    Box,
    Card,
    Drawer,
    IconButton,
    Toolbar,
    Tooltip,
    Avatar,
    Typography,
    ThemeProvider,
    createTheme,
} from '@mui/material'

import {
    Menu,
    Info,
    Contacts,
    Construction,
    //Brightness4,
    //Brightness7
} from '@mui/icons-material'

import {
    Link
} from 'react-router-dom'
import {
    deepPurple
} from '@mui/material/colors'

import DANILO from '../../img/danilo1.jpg'

export default function NavBar() {
    const name = 'BE WELCOME 😀'
    const title_list = ['ABOUT ME', 'PROJECTS', 'CONTACT']
    const title_comp = [<Info />, <Construction/>, <Contacts/>]
    const link_listt = ['/about', '/projects', '/contact']
    //const [darkMode, setDarkMode] = useState('light')
    //const [mode, setMode] = useState(false)
    const [open, setOpen] = useState(false)
    const toggleOpen = () =>{
        setOpen(prev => !prev)
    }
    const theme = createTheme({
        palette:{
            mode:'light'
        },
        components:{

        }
    })
    //const toggleMode = () =>{setMode(prev => !prev)setDarkMode(prevMode => prevMode === 'light' ? 'dark' : 'light')}
    return (
        <ThemeProvider theme={theme}>
        <Box>
            <AppBar position='static'>
                <Toolbar sx={{background:'#17191A', boxShadow:'1px 5px 10px rgba(0,0,0,0.5)'}} >
                    <IconButton onClick={toggleOpen}><Menu sx={{fontSize:40, color:'#373D42'}}/></IconButton>
                    <Typography fontFamily='monospace'>{name}</Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant='temporary' open={open}color="primary" sx={{background:'transparent'}} >
                <Box sx={{background:'transparent'}}>
                    <Card sx={{padding:2, background:'transparent'}}>
                        <Tooltip title='DANILO A TOMASSONI'>
                            <Avatar src={DANILO} sx={{textAlign:'center', bgcolor: deepPurple[500] }}></Avatar>
                        </Tooltip>
                    </Card>
              {title_list.map((value, index)=>{
                  return(
                      <Card key={index} sx={{background:'transparent'}}>
                        <IconButton onClick={toggleOpen} sx={{padding:2}}>{title_comp[index]}<Link to={link_listt[index]} style={{textDecoration:'none', color:'#833AB4'}} ><Typography fontFamily='monospace'>{value}</Typography></Link></IconButton>
                    </Card>
                  )
              })}
              </Box>
            </Drawer>
        </Box>
        </ThemeProvider>
    )
}
