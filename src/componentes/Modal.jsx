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

function SimpleDialog(props) {

    const { open, onClose } = props

    const handleClose = () => {
        onClose()
    }

    return (
        <>
            <Dialog
                onClose={handleClose}
                open={open}
                fullWidth='md'
                maxWidth='md'
            >
                <DialogTitle>Novo Contato</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Navigation />
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
                        onClick={() => handleClose()}>Salvar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

const Modal = (props) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <button
                onClick={handleOpen}>Novo Contato</button>

            <SimpleDialog
                fullWidth='md'
                maxWidth='md'
                open={open}
                onClose={handleClose}
            />
        </>
    )
}

export default Modal