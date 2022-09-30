import React, { useState } from 'react'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material'

import { useHistory } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import './Header.css'



const Header = () => {
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
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                <List>
                    <ListItem button onClick={() => handleMenuClick('/')}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => handleMenuClick('/customers')} >
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText>List Customers</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => handleMenuClick('/customers')} >
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