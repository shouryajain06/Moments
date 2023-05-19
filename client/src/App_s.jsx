import React from 'react'
import CardComponent from './TailwindComponents/CardComponent'
import Header from './TailwindComponents/Header'
import Profile from './TailwindComponents/Profile'
import postsdata from './postsdata.json'
import Home from './TailwindComponents/pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'postcss'
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'

const App = () => {
  return (
    <BrowserRouter>

       {/* <Navbar/> */}
       <Switch>
         <Route exact path="/">
        <Home></Home>
        </Route>
        <Route exact path="/auth" component={Auth}/>
        </Switch>
     

    </BrowserRouter>
  )
}

export default App