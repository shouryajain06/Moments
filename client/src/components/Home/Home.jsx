import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import {useDispatch} from 'react-redux';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';
const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [currentId,setCurrentId] = useState(null);
    useEffect(()=>{
        dispatch(getPosts());
      }, [dispatch, setCurrentId])
  return <>
       <Grow in>
              <Container>
                  <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
                      <Grid item xs={12} sm={7}>
                      <Posts currentId={currentId} setCurrentId={setCurrentId}></Posts>
                      </Grid>
                      <Grid item xs={12} sm={4}>
        
                          <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
                      </Grid>
                  </Grid>
              </Container>
          </Grow>
  </>;
};

export default Home;
