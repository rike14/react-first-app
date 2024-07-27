import { Box, Button, Skeleton, TextField } from "@mui/material"
import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import useAuth from "../state/auth"



const Login = () => {
    const history = useHistory()

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    const {user, setUser} = useAuth()

    const handleInputChange = e => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: value,
        })

    }

    const handleFormSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            setUser({
                logged: true,
                email: form.email,
            })

            history.push('/')
            
        }, 4000)
    }

    return (
        isLoading ? 
            <Box>
                <Skeleton variant="rectangular" height={100} width="15%" style={{marginTop: 15}} />
                <Skeleton animation="wave" height={80} width="15%" />
            </Box>
            :
            <>
                <Box component="form"
                    sx={{
                        marginTop: 2,
                    }}
                    autoComplete="off">
                    <TextField
                        onChange={handleInputChange}
                        label="Digit your e-mail"
                        name="email"
                    />
            </Box>
                <Box component="form"
                    sx={{
                        marginTop: 2,
                    }}
                    autoComplete="off">
                    <TextField
                        onChange={handleInputChange}
                        label="Digit your password"
                        name="password"
                        type="password"
                    />
            </Box>
                <Box component="form"
                    sx={{
                        marginTop: 2,
                    }}
                    autoComplete="off">
                    <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                    {
                        isLoading ? 'Loading...' : 'Enter'
                    }
                    </Button>
            </Box>
            </>
    )
}
export default Login