import React, { useState } from 'react'
import Navigation from './Navigation'
import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    DialogActions
} from '@material-ui/core'

const Modal = (props) => {

    const [person, setPerson] = useState({})

    const savePerson = () => {
        props.addContact(person)
    }

    return (
        <>
            <Dialog
                onClose={() => props.setOpen(false)}
                open={open}
                fullWidth='md'
                maxWidth='md'
            >
                <DialogTitle>Novo Contato</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Navigation
                            person={person}
                            setPerson={setPerson}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        className="btn"
                        onClick={() => props.setOpen(false)}>Cancelar</Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className="btn"
                        onClick={() => savePerson()}>Salvar</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export default Modal