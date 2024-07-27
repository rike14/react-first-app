import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

import { useHistory } from "react-router-dom"

import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import PersonIcon from '@mui/icons-material/Person'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import './Header.css'



const Header = ({ user }) => {
    const history = useHistory()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route => {
        history.push(route)
        handleToggleMenu()
    }

    return(
        <>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => handleToggleMenu()}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                            Home
                        </Typography>
                        {
                            user.logged
                            ? <Typography variant='h6'>{user.email}</Typography>
                                : <Button onClick={() => history.push('/login')} color="inherit">Login</Button>

                        }
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                <List>
                    <ListItem onClick={() => handleMenuClick('/')}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem onClick={() => handleMenuClick('/customers')} >
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText>List Customers</ListItemText>
                    </ListItem>
                    <ListItem onClick={() => handleMenuClick('/customers/add')} >
                        <ListItemIcon>
                            <PersonAddIcon/>
                        </ListItemIcon>
                        <ListItemText>Add Customer</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default Header