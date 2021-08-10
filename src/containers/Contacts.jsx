import React, { useState } from 'react'
import MaterialTable from 'material-table'
import { Button } from '@material-ui/core'
import Modal from '../componentes/Modal'

const people = {
    data: {
        data: {
            people: [
                { id: 1, nome: "Ana Paula", cpf: "33333363626", mobile: "5511998956655", email: "abezerra@mkmservice.com", dtNasc: '', apelido: 'dev-jr', codcli: "123" },
                { id: 2, nome: "Everton Mourinho", cpf: "999653265453", mobile: "5511998956655", email: "emourinho@mkmservice.com", dtNasc: '', apelido: 'front-dev', codcli: "321" },
                { id: 3, nome: "Hércules Maranhão", cpf: "996656565656", mobile: "5511998956655", email: "hmaranhao@mkmservice.com", dtNasc: '', apelido: 'front-dev', codcli: "222" },
            ]
        }, messages: []
    }
}

const columns = [
    { title: 'Nome', field: 'nome' },
    { title: 'CPF', field: 'cpf' },
    { title: 'Celular', field: 'mobile' },
    { title: 'E-mail', field: 'email' },
    { title: 'Data de Nascimento', field: 'dtNasc', type: Date },
    { title: 'Apelido', field: 'apelido' },
    { title: 'Código do cliente', field: 'codcli' },
]

const Contacts = () => {

    const [open, setOpen] = useState(false)
    const [contacts, setContacts] = useState(people.data.data.people)

    function addContact(contact) {
        setContacts([...contacts, contact])
        setOpen(false)
    }

    return (
        <>
            <Button
                variant="contained"
                color='primary'
                onClick={() => setOpen(true)}>Novo Contato</Button>
            {open &&
                <Modal
                    addContact={addContact}
                    setOpen={setOpen}
                />
            }
            <MaterialTable
                title="Gestão de Contatos"
                data={contacts}
                columns={columns}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            const dataUpdate = [...contacts]
                            const index = oldData.tableData.id
                            dataUpdate[index] = newData
                            setContacts([...dataUpdate])
                            resolve()
                        })
                    ,
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            const dataDelete = [...contacts]
                            const index = oldData.tableData.id
                            dataDelete.splice(index, 1)
                            setContacts([...dataDelete])
                            resolve()
                        })
                }}
                options={{
                    rowStyle: {
                        backgroundColor: '#e2effb',
                        fontFamily: 'monospace',
                        fontSize: '14px'
                    },
                    headerStyle: {
                        fontFamily: 'monospace',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    },
                }}
                localization={{
                    header: {
                        actions: 'Editar',
                    },
                    body: {
                        deleteTooltip: 'Excluir',
                        editTooltip: 'Editar',
                    },
                }}
            />
        </>
    )
}

export default Contacts