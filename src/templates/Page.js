import { Card } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    card: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
    }
}))

const Page = ({ title, Component }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card} sx={{ boxShadow: 3, color: deepPurple[700] }}>  
            <Typography variant='h3'>
                {title}
            </Typography>
            <Component />
        </Card>
    )
}

export default Page