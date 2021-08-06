import React from 'react'
import '../styles/form_contato.css'
import PessoaFisica from './PessoaFisica'
import PessoaJuridica from './PessoaJuridica'
import { useState } from 'react'
import {
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio
} from '@material-ui/core';

const Gerais = ({person, setPerson}) => {

   

    return (
        <>
            <div className="form-card">
                <div className="tipo_pessoa">
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="tipo_pessoa" name="row-radio-buttons-group">
                            <FormControlLabel value="Pessoa Física" control={<Radio />} label="Pessoa Física" id='pf'  />
                            <FormControlLabel value="Pessoa Jurídica" control={<Radio />} label="Pessoa Jurídica" id='pj' />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
            <PessoaFisica />
                </div>
            </div >
        </>
    )
}

export default Gerais