import React from 'react'
import './App.css'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'


import Home from './pages/Home'
import Customers from './pages/Customers'

function App() {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers">
            <TemplatePage title="Customers" Component={Customers} />
          </Route>
          <Route path="/">
            <TemplatePage title="Home" Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  )
}

export default App;
