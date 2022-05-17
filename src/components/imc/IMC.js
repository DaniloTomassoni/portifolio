import React,{useEffect, useState} from 'react'
import {
    Box,
    Grid,
    Button,
    TextField,
    Typography,
    InputAdornment
} from "@mui/material"
export default function IMC() {
    
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState(0)
    const [msg, setMsg] = useState(null)
    const [cor, setCor] = useState("yellow")
    const calcularIMC = () =>{
        setImc(peso / (altura * altura))
    }
    useEffect(()=>{
        if(isNaN(imc) ||isFinite(imc)){
            setMsg("")
        }
        if( imc > 0 && imc <= 18){
            setMsg(`MAGREZA ☹️`)
            setCor("red")
        }
        if(imc > 18 && imc <=25){
            setMsg(`SAUDÁVEL 🙂`)
            setCor("green")
        }
        if(imc > 25 && imc <=30){
            setMsg(`SOBREPESO 😐`)
            setCor("yellow")
        }
        if(imc > 30 && imc <=35){
            setMsg(`OBSIDADE GRAU I ☹️`)
            setCor("red")
        }
        if(imc > 35 && imc <=40){
            setMsg(`OBSIDADE GRAU II ☹️`)
            setCor("red")
        }
        if(imc > 40){
            setMsg(`OBSIDADE GRAU III ☹️`)
            setCor("red")
        }
        
    },[imc])
  return (
    <Box sx={{padding:5}} >
        <Box sx={{textAlign:"center"}}>
            <Typography fontFamily="-moz-initial fantasy" fontSize={15} sx={{color:"yellow"}}>ÍNDICE DE MASSA CORPORAL (IMC)</Typography>
        </Box>
        <Grid container sx={{padding:1, width:"100%"}}>
            <Grid item sx={{width:'50%'}}>
                <TextField type="number" id="altura" label="ALTURA" onChange={(event)=>setAltura(event.target.value)}/>
            </Grid>
            <Grid item  sx={{width:'50%'}}>
                <TextField InputProps={{ startAdornment: <InputAdornment position="start">kg</InputAdornment>}} type="number" id="peso" label="PESO" onChange={(event)=>setPeso(event.target.value)}/>
            </Grid>
        </Grid>
        <Box sx={{textAlign:"center"}}>
            <Button color="secondary" ><Typography fontFamily="-moz-initial cursive" fontSize={50} onClick={calcularIMC}>CALCULAR</Typography></Button>
        </Box>
        <Box sx={{textAlign:"center"}}>
            <Typography sx={{color:"#007fff"}}>Seu IMC é {isNaN(imc)? 0.00 : imc.toFixed(2)}</Typography>
        </Box>
        <Box>
            <Typography fontSize={20} fontFamily="-moz-initial" sx={{color:cor, textAlign:"center"}}>
                {msg !== null ? msg : null}
            </Typography>
        </Box>
    </Box>
  )
}
