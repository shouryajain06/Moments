import React from 'react'
import Home from './TailwindComponents/pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from './components/Auth/Auth'

const App = () => {
  return (
    <BrowserRouter>

      {/* <Navbar/> */}
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/auth" component={Auth} />
      </Switch>


    </BrowserRouter>
  )
}

export default App