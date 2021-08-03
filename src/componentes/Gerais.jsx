import React from 'react'
import '../styles/form_contato.css'
import {
    Grid,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio
} from '@material-ui/core';
import { useState } from 'react';

const Gerais = () => {

    const [nome, setNome] = useState('')

    return (
        <>
            <div className="form-card">
                <div className="tipo_pessoa">
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="tipo_pessoa" name="row-radio-buttons-group">
                            <FormControlLabel value="Pessoa Física" control={<Radio />} label="Pessoa Física" />
                            <FormControlLabel value="Pessoa Jurídica" control={<Radio />} label="Pessoa Jurídica" />
                        </RadioGroup>
                    </FormControl>
                </div>
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

export default Gerais