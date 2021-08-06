import React from 'react'
import '../styles/form_contato.css'
import {
    Grid,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    FormControl,
} from '@material-ui/core';

const PessoaJuridica = () => {

    return (
        <>
            <div className="form-card">
                <div className="form-fields">
                    <Grid container rowSpacing={4} spacing={4}>
                        <Grid
                            item xs={12} sm={6} md={4}>
                            <TextField id="razao_social" variant="standard" size="small" label="Razão Social" fullWidth />
                        </Grid>
                        <Grid
                            item xs={12} sm={6} md={4}>
                            <TextField id="nome_Fantasia" variant="standard" size="small" label="Nome Fantasia" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField id="cnpj" variant="standard" size="small" label="CNPJ" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField id="cd_cliente" variant="standard" size="small" label="Código Cliente" fullWidth />
                        </Grid>
                        <Grid
                            item xs={12} sm={6} md={4}>
                            <TextField id="contato" variant="standard" size="small" label="Contato" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <FormControl fullWidth size="small" >
                                <InputLabel id="org">Organização</InputLabel>
                                <Select id="org" variant="standard">
                                    <MenuItem>ORG 001</MenuItem>
                                    <MenuItem>ORG 002</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </div>
            </div >
        </>
    )
}

export default PessoaJuridica