import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { updatePost, createPost } from '../../actions/posts';
import { useRef } from 'react';
const Form = ({ currentId, setCurrentId }) => {
    const classes = styles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [postData, setPostData] = useState({
        title: '', message: '', tags: '', selectedFile: '',
    });
    const dispatch = useDispatch();
    const post = useSelector(state => currentId ? state.posts.find(p => p._id === currentId) : null);
    const handleChange = (e) => {
        if (e.target.name === 'tags') {
            return setPostData({ ...postData, tags: e.target.value.split(e.target.value.includes(',') ? ',' : ' ') });
        }
        setPostData({
            ...postData, [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        let postNewData = { ...postData, name: user?.result?.name }
        if (currentId) {
            dispatch(updatePost(currentId, postNewData))
        }
        else {
            dispatch(createPost(postNewData));
            console.log(postData);
        }
        clear();
    }
    const clear = () => {
        setCurrentId(null);
        setPostData({
            title: '', message: '', tags: '', selectedFile: '',
        });
    }
    const ref = useRef();

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant='h6' align='center'>
                    Please Sign In to create your own memories and like other's memories.
                </Typography>
            </Paper>
        )
    }

    return <div>
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? 'Edit' : 'Create'}  Post</Typography>

                <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title}
                    onChange={handleChange}
                ></TextField>
                <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags}
                    onChange={handleChange}
                ></TextField>
                <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message}
                    onChange={handleChange}
                ></TextField>
                <div onClick={() => ref.current.click()} className='px-4 py-2 w-full relative text-center my-4 cursor-pointer bg-[#0a4f79] text-white  rounded-md'>Upload  <div ref={ref} className='absolute top-0 left-[30%] opacity-0'>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div></div>

                <Button className={classes.buttonSubmit} type="submit" variant='contained' color='primary' size='large' fullWidth>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    </div>
};

export default Form;


