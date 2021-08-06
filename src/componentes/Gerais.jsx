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

const Gerais = () => {

    const [tipoPessoa, setTipoPessoa] = useState(<PessoaFisica />)

    const showType = (tipo) => {
        tipo === 'pf' ? setTipoPessoa(<PessoaFisica />) : setTipoPessoa(<PessoaJuridica />)

    }

    return (
        <>
            <div className="form-card">
                <div className="tipo_pessoa">
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="tipo_pessoa" name="row-radio-buttons-group">
                            <FormControlLabel value="Pessoa Física" control={<Radio />} label="Pessoa Física" id='pf' onClick={() => { showType('pf') }} />
                            <FormControlLabel value="Pessoa Jurídica" control={<Radio />} label="Pessoa Jurídica" id='pj' onClick={() => { showType('pj') }} />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>{tipoPessoa}</div>
            </div >
        </>
    )
}

export default Gerais