import { useState, useEffect } from "react"
import axios from "axios"
import Grid from '@mui/material/Grid'

import CustomerCard from "../components/CustomerCard"

const Customers = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const {data} = response.data

                setCustomers(data)
            })
    }, [])

    const handleRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(response => {
               const newCustomersState = customers.filter(customer => customer.id !== id)

               setCustomers(newCustomersState)
            })
    }
    return(
        <Grid container>
                {
                    customers.map(customer => (
                        <Grid item xs={12} md={4} style={{ padding: 10 }}>        
                            <CustomerCard 
                                id={customer.id}
                                name={customer.first_name}
                                lastname={customer.last_name}
                                email={customer.email}
                                avatar={customer.avatar}
                                className={customer.className}
                                onRemoveCustomer={handleRemoveCustomer}
                            />
                        </Grid>
                    ))
                }
        </Grid>
    )
}

export default Customers