import { Box, Grid, IconButton, Paper} from '@mui/material'
import React, {useState} from 'react'

export default function Calculadora() {
    const [newValue, setNewValue] = useState(0)
    const [value, setValue] = useState(0)
    const [operador, setOperador] = useState(null)

    const inputValue = (event) =>{
        var input = event.target.value
        if(newValue === 0){
            setNewValue(input)
        }else{       
            setNewValue(newValue + input)
        }
    }
    const porcentagem = () =>{
        setNewValue(newValue / 100)
    }
    const handleOperador = (event) =>{
        setOperador(event.target.value)
        setValue(newValue)
        setNewValue(0)
    }
    const calcular = () =>{
        if(newValue !== 0 && value !== 0){
            if(operador === '+'){
                setNewValue(Number(value) + Number(newValue))
                setValue(0)
                setOperador(null)
            }
            if(operador === '-'){
                setNewValue(Number(value) - Number(newValue))
                setValue(0)
                setOperador(null)
            }
            if(operador === 'x'){
                setNewValue(Number(value) * Number(newValue))
                setValue(0)
                setOperador(null)
            }
            if(operador === '/'){
                setNewValue(Number(value) / Number(newValue))
                setValue(0)
                setOperador(null)
            }
        }
    }
    const clear = () =>{
        setNewValue(0)
    }
  return (
    <Box sx={{width:"100%", background:"#000"}}>
        <Box>
            <Paper sx={{fontSize:100, background:"#808080",color:"#fff"}}>
                {newValue}
            </Paper>
        </Box>
        <Grid container >
            <Grid item sx={{width:'25%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="primary" sx={{width:"100%", fontSize:50}} onClick={inputValue} value={9}>9</IconButton>
            </Grid>
            <Grid item sx={{width:'25%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="primary" sx={{width:"100%", fontSize:50}} onClick={inputValue} value={8}>8</IconButton>
            </Grid>
            <Grid item sx={{width:'25%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="primary" sx={{width:"100%", fontSize:50}} onClick={inputValue} value={7}>7</IconButton>
            </Grid>
            <Grid item sx={{width:'25%',border:1, borderColor:"#738086", borderRadius:"5%", background:"transparent"}}>
                <IconButton color="secondary" sx={{width:"100%", fontSize:50}} onClick={handleOperador} value="+">+</IconButton>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sx={{width:'25%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="primary" sx={{width:"100%", fontSize:50}} onClick={inputValue} value={6}>6</IconButton>
            </Grid>
            <Grid item sx={{width:'25%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="primary" sx={{width:"100%", fontSize:50}} onClick={inputValue} value={5}>5</IconButton>
            </Grid>
            <Grid item sx={{width:'25%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="primary" sx={{width:"100%", fontSize:50}} onClick={inputValue} value={4}>4</IconButton>
            </Grid>
            <Grid item sx={{width:'25%',border:1, borderColor:"#738086", borderRadius:"5%", background:"transparent"}}>
                <IconButton color="secondary" sx={{width:"100%", fontSize:50}} onClick={handleOperador} value="-">-</IconButton>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sx={{width:'25%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="primary" sx={{width:"100%", fontSize:50}} onClick={inputValue} value={3}>3</IconButton>
            </Grid>
            <Grid item sx={{width:'25%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="primary" sx={{width:"100%", fontSize:50}} onClick={inputValue} value={2}>2</IconButton>
            </Grid>
            <Grid item sx={{width:'25%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="primary" sx={{width:"100%", fontSize:50}} onClick={inputValue} value={1}>1</IconButton>
            </Grid>
            <Grid item sx={{width:'25%',border:1, borderColor:"#738086", borderRadius:"5%", background:"transparent"}}>
                <IconButton color="secondary" sx={{width:"100%", fontSize:50}} onClick={handleOperador} value="/">/</IconButton>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sx={{width:'25%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="secondary" sx={{width:"100%", fontSize:50}} onClick={inputValue} value={"."}>.</IconButton>
            </Grid>
            <Grid item sx={{width:'25%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="secondary" sx={{width:"100%", fontSize:50}} onClick={porcentagem}>%</IconButton>
            </Grid>
            <Grid item sx={{width:'25%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="primary" sx={{width:"100%", fontSize:50}} onClick={inputValue} value={0}>0</IconButton>
            </Grid>
            <Grid item sx={{width:'25%',border:1, borderColor:"#738086", borderRadius:"5%", background:"transparent"}}>
                <IconButton color="secondary" sx={{width:"100%", fontSize:50}}  onClick={handleOperador} value="x">X</IconButton>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sx={{width:'75%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="secondary" sx={{width:"100%", fontSize:50}} onClick={calcular}>=</IconButton>
            </Grid>
            <Grid item sx={{width:'25%', border:1, borderColor:"#738086", borderRadius:"5%",background:"transparent"}}>
                <IconButton color="secondary" sx={{width:"100%", fontSize:50}} onClick={clear}>AC</IconButton>
            </Grid>
        </Grid>
    </Box>
  )
}
