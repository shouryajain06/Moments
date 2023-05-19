import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  Icon,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Icon from "./icon";
import { GoogleLogin } from "react-google-login";
import Input from "./Input";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import { signin,signup } from "../../actions/auth";

const initialState = {
  fistName : '',
  lastName : '',
  email : '',
  password : '',
  confirmPassword : ''
}

const Auth = () => {
  const classes = useStyles();
  const history = useHistory();
  
  const [formData,setFormData] = useState(initialState);

  const dispatch=useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(true);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const googleSuccess=async (res)=>{
     const result = res?.profileObj; //?.won't give the error if res doesnt exist
     const token = res?.tokenId;
     try {
         dispatch({type : 'AUTH', data:{result,token}});
         history.push('/');
     }catch(err) {

     }
     
  }
  const googleFailure=(error)=>{
      console.log(error+'Google Sign In was unsuccessful, Try again later!')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (isSignup) {
      let {firstName, lastName, password, email} = formData;
      const formToSubmit = {firstName,lastName,password,email};
      dispatch(signup(formToSubmit,history));
    } else {

      let {password, email} = formData;
      const formToSubmit = {password,email};
      dispatch(signin(formToSubmit,history));
    }
   
  };
  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name] : e.target.value
    })

  };
  const switchMode = () => {
    setIsSignUp((prev) => !prev);
  };
  return (
    <Container component={"main"} maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                  autoFocus
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
//           <GoogleLogin
//             clientId="1016365164936-eaumk4k8kdghjlu7dfkvi32ots5lb26i.apps.googleusercontent.com"
//             render={(renderProps) => (
//               <Button
//               className={classes.googleButton}
//                 onClick={renderProps.onClick}
//                 disabled={renderProps.disabled}
//                 variant="contained"
//                 fullWidth
      
//                 color='primary'
                
//               >
//                 Google Signin
//               </Button>
//             )}
//             onSuccess={googleSuccess}
//             onFailure={googleFailure}
//             cookiePolicy={"single_host_origin"}
//           />
          
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an Account? Sign In"
                  : "Don't have a account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
