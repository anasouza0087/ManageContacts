import React from 'react'
import '../styles/form_contato.css'
import { Grid, TextField } from '@material-ui/core';
import { useState } from 'react';

const Endereco = () => {

    const [logradouro, setLogradouro] = useState('')

    return (
        <>
            <div className="form-card">
                <div className="form-fields">
                    <Grid container rowSpacing={4} spacing={4}>
                        <Grid
                            item xs={12} sm={6} md={8}>
                            <TextField
                                id="logradouro"
                                variant="standard"
                                size="small"
                                label="Logradouro"
                                value={logradouro}
                                fullWidth
                                onChange={e => setLogradouro(e.target.value)} />
                        </Grid>
                        <Grid
                            item xs={12} sm={6} md={4}>
                            <TextField id="numero" variant="standard" size="small" label="Número" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField id="complemento" variant="standard" size="small" label="Complemento" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField id="bairro" variant="standard" size="small" label="Bairro" fullWidth />
                        </Grid>
                        <Grid
                            item xs={12} sm={6} md={4}>
                            <TextField id="cidade" variant="standard" size="small" label="Cidade" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField id="estado" variant="standard" size="small" label="Estado" fullWidth />
                        </Grid>
                        <Grid
                            item xs={12} sm={6} md={4}>
                            <TextField id="cep" variant="standard" size="small" label="CEP" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField id="país" variant="standard" size="small" label="País" fullWidth />
                        </Grid>
                    </Grid>
                </div>
            </div >
        </>
    )
}

export default Endereco