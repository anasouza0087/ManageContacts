import React, { useState } from 'react'
import MaterialTable from 'material-table'
import Modal from './Modal'
import { connect } from 'react-redux'

const people = {
    data: {
        data: {
            people: [
                { id: 1, nome: "Ana Paula", cpf: "33333363626", mobile: "5511998956655", email: "abezerra@mkmservice.com", codcli: "123" },
                { id: 2, nome: "Everton Mourinho", cpf: "999653265453", mobile: "5511998956655", email: "emourinho@mkmservice.com", codcli: "321" },
                { id: 3, nome: "Hércules Maranhão", cpf: "996656565656", mobile: "5511998956655", email: "hmaranhao@mkmservice.com", codcli: "222" },
            ]
        }, messages: []
    }
}

const columns = [
    { title: 'Nome', field: 'nome' },
    { title: 'CPF', field: 'cpf' },
    { title: 'Celular', field: 'mobile' },
    { title: 'E-mail', field: 'email' },
    { title: 'Código do cliente', field: 'codcli' }
]

const Contacts = (props) => {
    console.log(props.nome)

    const [contacts, setContacts] = useState(people.data.data.people)

    // debugger
    // function addContact(nome, cpf, mobile, email, codcli) {
    //     setContacts('Ricardo', 12388978976, 11987876565, ' ricardo@mkmservice.com', 789)
    // }

    return (
        <>
            <Modal
            // handleAddContact={addContact}
            />
            <MaterialTable title="Gestão de Contatos"
                data={contacts}
                columns={columns}
            />
            {/* < button onClick={addContact}>ADD</button > */}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        nome: state.nomes
    }
}

export default connect(mapStateToProps)(Contacts)