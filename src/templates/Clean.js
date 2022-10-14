import Container from '@mui/material/Container';

const Clean = ({ Component }) => {
    return(
        <>
            <Container sx={{ py: 10}}>
                <Component />
            </Container>
        </>
    )
}

export default Clean