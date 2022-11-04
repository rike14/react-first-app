import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import TemplateClean from './templates/Clean'


import Home from './pages/Home'
import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import CustomersEdit from './pages/customers/Edit'
import Login from './pages/Login'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <TemplateClean title="Restrict Access" Component={Login} />
          </Route>
          <TemplateDefault>
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
          </TemplateDefault>
        </Switch>
    </Router>
  )
}

export default App;
