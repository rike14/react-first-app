import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom"

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'


import CustomersEdit from './pages/customers/Edit'
import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <Router>
            <TemplateDefault />
        <Switch>
              <Route path="/login">
                <TemplatePage title="Login" Component={Login} />
              </Route>
              <Route path="/customers/edit/:id">
                <TemplatePage title="Edit Customer" Component={CustomersEdit} />
              </Route>
              <Route path="/customers/add">
                <TemplatePage title="Register Customer" Component={CustomersRegister} />
              </Route>
              <Route path="/customers">
                <TemplatePage title="Customers" Component={CustomersList} />
              </Route>
              <Route path="/">
                <TemplatePage title="Home" Component={Home} />
              </Route>
        </Switch>
    </Router>
  )
}

export default App;
