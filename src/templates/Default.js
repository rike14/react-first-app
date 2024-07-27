
import Header from "../partials/Header/Header";
import useAuth from '../state/auth';


const Default = () => {
    const { user } = useAuth()

    return(
        <>
            <Header  user={user}/>
        </>
    )
}

export default Default