import React, { useState } from 'react'
import classNames from 'classnames'

import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton,
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import ModalConfirm from './ModalConfirm'


const CustomerCard = ({
    name,
    lastname,
    email,
    avatar,
    className,
}) => {
    const [openModal, setOpenModal] = useState(false)

    const handleToggleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleConfirmModal = () => {
        alert('teste')
    }

    const handleRemoveCustomer = () => {
        handleToggleOpenModal()
    }
   
    return (
        <>
            <Card className={classNames(className)}>
                <CardHeader
                    avatar={
                        <Avatar  aria-label="recipe" src={avatar}>
                            R
                        </Avatar>
                    }
                    title={`${name} ${lastname}`}
                    subheader={email}
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="edit customer">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="remove customer" onClick={handleRemoveCustomer}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <ModalConfirm 
                open={openModal}
                onClose={handleToggleOpenModal}
                onConfirm={handleConfirmModal}
                title="ARE YOU SURE DELETE THIS CUSTOMER?!"
            />
        </>
    );
}

export default CustomerCard