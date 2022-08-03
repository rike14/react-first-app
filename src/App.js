import React from 'react'
import './App.css'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import TemplateDefault from './templates/Default'
import Home from './pages/Home'
import Users from './pages/Users'

function App() {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  )
}

export default App;
