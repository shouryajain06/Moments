import React, {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Form from './components/Form/Form.jsx';
import Posts from './components/Posts/Posts.jsx';
import Home from './components/Home/Home.jsx';
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Auth from './components/Auth/Auth.jsx';
import { getPosts } from './actions/posts.js';
import Navbar from './components/Navbar/Navbar.jsx';

const App = () => {

    const classes = useStyles();
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
         <Navbar/>
         <Switch>
           <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/auth" component={Auth}/>
          </Switch>
       
      </Container>
      </BrowserRouter>
  )
};

export default App;
