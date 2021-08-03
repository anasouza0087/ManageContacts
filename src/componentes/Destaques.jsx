import React from 'react'
import '../styles/form_contato.css'
import {
    Grid,
    TextField,
} from '@material-ui/core';

const Destaques = () => {

    return (
        <>
            <div className="form-card">
                <div className="form-fields">
                    <Grid container rowSpacing={4} spacing={4}>
                        <Grid
                            item xs={12} sm={6} md={6}>
                            <TextField id="nome" variant="standard" size="small" label="Nome" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField id="cpf" variant="standard" size="small" label="CPF" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField id="logradouro" variant="standard" size="small" label="Logradouro" fullWidth />
                        </Grid>
                        <Grid
                            item xs={12} sm={6} md={6}>
                            <TextField id="numero" variant="standard" size="small" label="Número" fullWidth />
                        </Grid>
                    </Grid>
                </div>
            </div >
        </>
    )
}

export default Destaques