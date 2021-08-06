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

    const [open, setOpen] = useState(false)
    const [person, setPerson] = useState({})

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    // debugger
    // function handleAddContact(...props) {
    //     console.log('Ricardo', 12388978976, 11987876565, ' ricardo@mkmservice.com', 789)
    // }

    const savePerson = () =>{
        debugger
        props.addContact(person)
    }

    return (
        <>
            <Button
                variant="contained"
                color='primary'
                onClick={handleOpen}>Novo Contato</Button>

            <Dialog
                onClose={handleClose}
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
                        onClick={() => handleClose()}>Cancelar</Button>
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