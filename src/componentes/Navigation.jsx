import React, { useState } from 'react'
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { TabPanel, TabContext } from '@material-ui/lab';
import Gerais from './Gerais';
import Contato from './Contato'
import Endereco from './Endereco';
import Destaques from './Destaques';
import Adicionais from './Adicionais';

const Navigation = ({ person, setPerson }) => {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            <TabContext
                value={value}>
                <AppBar
                    position="static"
                    color="default">
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}>
                        <Tab label="Destaques" value='0' />
                        <Tab label="Dados Gerais" value='1' />
                        <Tab label="Contato" value='2' />
                        <Tab label="Endereço" value='3' />
                        <Tab label="Adicionais" value='4' />
                    </Tabs>
                </AppBar>
                <TabPanel value='0'><Destaques /></TabPanel >
                <TabPanel value='1'>
                    <Gerais
                        person={person}
                        setPerson={setPerson}
                    />
                </TabPanel >
                <TabPanel value='2'>
                    <Contato
                        person={person}
                        setPerson={setPerson}
                    />
                </TabPanel>
                <TabPanel value='3'><Endereco /></TabPanel>
                <TabPanel value='4'><Adicionais /></TabPanel>
            </TabContext >
        </>
    )
}

export default Navigation
