import React from 'react'
import '../styles/form_contato.css'
import { useState } from 'react';
import {
    Grid,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    FormControl,
} from '@material-ui/core';

const PessoaFisica = () => {

    const [nome, setNome] = useState('')

    return (
        <>
            <div className="form-card">
                <div className="form-fields">
                    <Grid container rowSpacing={4} spacing={4}>
                        <Grid
                            item xs={12} sm={6} md={4}>
                            <TextField
                                id="nome"
                                variant="standard"
                                size="small"
                                label="Nome"
                                value={nome}
                                fullWidth
                                onChange={e => setNome(console.log(e.target.value))} />
                        </Grid>
                        <Grid
                            item xs={12} sm={6} md={4}>
                            <TextField id="apelido" variant="standard" size="small" label="Apelido" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField id="cpf" variant="standard" size="small" label="CPF" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField id="dt_nasc" variant="standard" size="small" label="Data de Nascimento" fullWidth />
                        </Grid>
                        <Grid
                            item xs={12} sm={6} md={4}>
                            <TextField id="cd_cliente" variant="standard" size="small" label="Código do cliente" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <FormControl fullWidth size="small" >
                                <InputLabel id="org">Organização</InputLabel>
                                <Select id="org" variant="standard">
                                    <MenuItem>Teste 001</MenuItem>
                                    <MenuItem>Teste 002</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </div>
            </div >
        </>
    )
}

export default PessoaFisica