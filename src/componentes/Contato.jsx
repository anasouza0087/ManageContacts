import React from 'react'
import '../styles/form_contato.css'
import {
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel
} from '@material-ui/core';

const Contato = ({ person, setPerson }) => {

    return (
        <>
            <div className="form-card">
                <div className="form-fields">
                    <Grid container rowSpacing={4} spacing={4}>
                        <Grid
                            item xs={12} sm={6} md={6}>
                            <TextField
                                id="email"
                                variant="standard"
                                size="small"
                                label="E-Mail"
                                value={person?.email}
                                fullWidth
                                onChange={e => setPerson({ ...person, email: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                id="celular"
                                variant="standard"
                                size="small"
                                label="Celular"
                                value={person?.mobile}
                                fullWidth
                                onChange={e => setPerson({ ...person, mobile: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField id="telefone" variant="standard" size="small" label="Telefone Fixo" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth size="small" >
                                <InputLabel id="org">Grupo</InputLabel>
                                <Select id="grupo" variant="standard">
                                    <MenuItem>Grupo A</MenuItem>
                                    <MenuItem>Grupo B</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} fullWidth size="small">
                            <FormControlLabel
                                control={<Checkbox name="opt-in" color="primary" />}
                                label="Sua empresa assegura ter realizado opt in para este contato."
                            />
                        </Grid>
                    </Grid>
                </div>
            </div >
        </>
    )
}

export default Contato