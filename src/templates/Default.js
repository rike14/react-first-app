import Container from '@mui/material/Container';

import Header from "../partials/Header/Header"


const Default = ({children}) => {
    return(
        <>
            <Header />
            <Container sx={{ py: 10}}>
                {children}
            </Container>
        </>
    )
}

export default Default