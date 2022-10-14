import { useState } from "react"
import { Button, TextField, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3),
    }
}))

const Login = () => {
    const classes = useStyles()

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = e => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: value,
        })

    }

    const handleFormSubmit = () => {
        console.log(form)
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
                    Enter
                </Button>
           </div>
        </>
    )
}
export default Login