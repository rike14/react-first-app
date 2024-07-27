import classNames from 'classnames'
import React, { useState } from 'react'

import {
    Avatar,
    Card,
    CardActions,
    CardHeader,
    IconButton,
} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import { deepPurple, grey } from '@mui/material/colors'
import ModalConfirm from './ModalConfirm'


const CustomerCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    className,
    onRemoveCustomer,
    onEditCustomer,
}) => {
    const [openModal, setOpenModal] = useState(false)

    const handleToggleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleConfirmModal = id => {
        onRemoveCustomer(id)
        handleToggleOpenModal()
    }

    const handleRemoveCustomer = () => {
        handleToggleOpenModal()
    }

    const handleEditCustomer = id => {
        onEditCustomer(id)
    }
   
    return (
        <>
            <Card className={classNames(className)} sx={{background: deepPurple[700], color: 'white', boxShadow: 5}}>
                <CardHeader
                    avatar={
                        <Avatar  aria-label="recipe" src={avatar}>
                            R
                        </Avatar>
                    }
                    title={`${name} ${lastname}`}
                    subheader={email}
                    subheaderTypographyProps={{color: 'white'}}
                />
                <CardActions disableSpacing>
                    <IconButton 
                        sx={{
                            color: 'white', 
                                "&:hover": {
                                    backgroundColor: deepPurple[900],
                                    color: grey[200]
                                } 
                        }} 
                        aria-label="edit customer" 
                        onClick={() => handleEditCustomer(id)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton 
                        sx={{
                            color: 'white', 
                                "&:hover": {
                                    backgroundColor: deepPurple[900],
                                    color: grey[200]
                                }
                        }} 
                        aria-label="remove customer"
                        onClick={handleRemoveCustomer}
                    >
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <ModalConfirm 
                open={openModal}
                onClose={handleToggleOpenModal}
                onConfirm={() => handleConfirmModal(id)}
                title="ARE YOU SURE DELETE THIS CUSTOMER?!"
            />
        </>
    );
}

export default CustomerCard