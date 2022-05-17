
import React, {useState} from "react"
import {
    Box,
    Button,
    TextField,
    Typography
} from '@mui/material'

export default function Contador(){
    const [contador, setContador] = useState(0)
    const [qtd, setQtd] = useState(1)
    const handleChange = (event) =>{
        setQtd(Number(event.target.value))
    }
    return(
        <Box sx={{textAlign:'center', padding:10}}>
            <Typography fontFamily="monospace" color="secondary" fontSize={40}>{contador}</Typography>
            <Box >
                
                <Button variant="contained" color="success" onClick={() => setContador(contador + qtd)}>+ {qtd}</Button>
                <Button variant="contained" color="error" onClick={() => setContador(contador - qtd)}>- {qtd}</Button>
                <Button variant="contained" color="primary" onClick={() => setContador(0)}>reset</Button>
            </Box>
            <Box >
                <TextField color="secondary" type="number" id="filled-basic" label="Quantidade" variant="filled" onChange={(event) =>{handleChange(event)}}/>
            </Box>
        </Box>
    )
}