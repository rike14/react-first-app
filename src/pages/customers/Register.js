import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import { useState } from 'react'


import { Skeleton } from '@mui/material'
import Toasty from '../../components/Toasty'
import CustomersList from './List'


const Register = () => {
    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        email: {
            value: '',
            error: false,
        },
    })

    const [openToasty, setOpenToasty] = useState({
        open: false,
        text: '',
        severity: '',
    })
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    const handleRegisterButton = () => {
        setIsLoading(true)
        let hasError = false
        let newToastyState = {
            ...openToasty,
        }
        let newFormState = {
            ...form,
        }
        if(!form.name.value) {
            setIsLoading(false)
            hasError = true

            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Incorrect name',
            }
        }
        if(!form.email.value) {
            setIsLoading(false)
            hasError = true

            newFormState.email = {
                value: form.email.value,
                error: true,
                helperText: 'Incorrect email',
            }
          
        }

        if(hasError){
            setForm(newFormState)
            setOpenToasty(newToastyState = {
                open: true,
                text: 'Error',
                severity: 'error'
            })
            return
        }

        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            email: form.email.value,
        }).then((response) => {
            setIsLoading(false)
            setOpenToasty(newToastyState = {
                open: true,
                text: 'Register successufully',
                severity: 'success'
            })
            setForm({
                name: {
                    value: '',
                    error: false,
                },
                email: {
                    value: '',
                    error: false,
                }
            
            })
        })

    }
    
    return (
        isLoading ? 
            <Box>
                <Skeleton variant="rectangular" height={100} width="15%" style={{marginTop: 15}} />
                <Skeleton animation="wave" height={80} width="15%" />
            </Box>
            :
            <>
                <Box
                    component="form"
                    sx={{
                    marginTop: 2,
                    }}
                    autoComplete="off"
                >
                    <TextField 
                        error={form.name.error}
                        helperText={form.name.error ? form.name.helperText : ''}
                        id="name" 
                        name="name" 
                        label="Your name" 
                        variant="standard" 
                        value={form.name.value} 
                        onChange={handleInputChange}
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        marginTop: 1,
                    }}
                    autoComplete="off"
                >
                    <TextField 
                        error={form.email.error}
                        helperText={form.email.error ? form.email.helperText : ''}
                        id="email" 
                        name="email"
                        label="Your email" 
                        variant="standard" 
                        value={form.email.value} 
                        onChange={handleInputChange} 
                    />
                </Box>
                <Button 
                    sx={{marginTop: 2}}
                    variant="contained" 
                    onClick={handleRegisterButton} 
                    disabled={isLoading}>
                        {
                        isLoading ? <Box 
                                    sx={{width: 54,
                                        height: 25,
                                    }}>
                                        <CircularProgress 
                                        color="inherit"
                                        size="1.5rem" 
                                        />
                                </Box> : 'Submit'
                        }
                </Button>
                <Toasty 
                    open={openToasty.open} 
                    severity={openToasty.severity} 
                    text={openToasty.text}
                    onClose={() => setOpenToasty(openToasty.open = false)}
                />
                <Box sx={{marginTop: 5, marginBottom: 5}} >
                    <hr />
                </Box>
                <CustomersList />
            </>
    )
}

export default Register