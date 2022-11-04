import { useState } from "react"
import { Button, TextField, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import useAuth from "../state/auth"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3),
    }
}))

const Login = () => {
    const classes = useStyles()
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
        <>
           <Typography variant="h3" >Restrict Access</Typography>

           <div className={classes.wrapper}>
                <TextField
                    onChange={handleInputChange}
                    label="Digit your e-mail"
                    name="email"
                />
           </div>
           <div className={classes.wrapper}>
                <TextField
                    onChange={handleInputChange}
                    label="Digit your password"
                    name="password"
                    type="password"
                />
           </div>
           <div className={classes.wrapper}>
                <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                   {
                    isLoading ? 'Loading...' : 'Enter'
                   }
                </Button>
           </div>
        </>
    )
}
export default Login