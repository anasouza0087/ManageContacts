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

const PessoaFisica = ({ person, setPerson }) => {

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
                                value={person?.nome}
                                fullWidth
                                onChange={e => setPerson({ ...person, nome: e.target.value })} />
                        </Grid>
                        <Grid
                            item xs={12} sm={6} md={4}>
                            <TextField
                                id="apelido"
                                variant="standard"
                                size="small"
                                label="Apelido"
                                value={person?.apelido}
                                fullWidth
                                onChange={e => setPerson({ ...person, apelido: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                id="cpf"
                                variant="standard"
                                size="small"
                                label="CPF"
                                value={person?.cpf}
                                fullWidth
                                onChange={e => setPerson({ ...person, cpf: e.target.value })} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField id="dt_nasc" variant="standard" size="small" label="Data de Nascimento" fullWidth />
                        </Grid>
                        <Grid
                            item xs={12} sm={6} md={4}>
                            <TextField
                                id="cd_cliente"
                                variant="standard"
                                size="small"
                                label="Código do cliente"
                                value={person?.codcli}
                                fullWidth
                                onChange={e => setPerson({ ...person, codcli: e.target.value })}
                            />
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