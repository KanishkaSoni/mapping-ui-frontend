import * as React from 'react';
import { useNavigate } from "react-router-dom";

import './Login.css'

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import Snackbar  from "@mui/material/Snackbar";

import Stack from '@mui/material/Stack';

import MuiAlert from '@mui/material/Alert';
import { Button, MenuItem, Select } from '@mui/material';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login(props){
    
    const [error, setError] = React.useState(false);

    const [success, setSuccess] = React.useState(false);

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const [role, setRole] = React.useState('');

    const handleChangeRole = (event) => {
        //console.log(event.target.value);
        setRole(event.target.value);
    };


    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    


    // const handleClick = () => {
    //     setOpen(true);
    // };

    // const handleChange = (event) => {
    //     setAuth(event.target.checked);
    // };

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setError(false);
    };
    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setSuccess(false);
    };

    const navigate = useNavigate();//to navigate to home page after login

    const handleSubmit = async (event) => {
        event.preventDefault();
        //console.log(event.target.elements);
        console.log(event.target.elements.username1.value);
        console.log(event.target.elements.password1.value);
        console.log(role); 
        //console.log(event.target.elements.demo-helper-text-misaligned);
        //console.log(event.target.elements["demo-helper-text-misaligned"].value);

        
        let user = {
            username: event.target.elements.username1.value,
            password: event.target.elements.password1.value,
            userRole: role
        }

        // let url = 'http://localhost:8080/users/signin';
        // let options = {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // }
        
        // let res = await fetch(url,options);
        // let data = await res.json();
        // console.log(data);

        if(user.username === 'abc' && user.password === '123'){

            console.log("Valid Credentials");
            setSuccess(true);
            props.setIsLoggedIn(true);
            navigate('/vadminhome');
            
        }
        else{
            setError(true);
        }
        //console.log('Logging In');



        //props.setIsLoggedIn(true);
        // navigate('/newsfeed');

        //console.log(data);
    }
        
    return(
        <div className="center">

            <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={error} autoHideDuration={6000} onClose={handleCloseError}>

                
                <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                Incorrect Username/Password!
                </Alert>
                
                

            </Snackbar>
            <Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSuccess}>

                
                
                <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
                This is a success message!
                </Alert>
                

            </Snackbar>
            </Stack>

            <h1 className="margin-heading loginsignupheading">Login</h1>
            <form onSubmit={handleSubmit}>

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                
                <div className="form-group col-md-6">
                    <TextField
                        helperText="Please enter your username"
                        id="username1"
                        label="Username"
                        sx={{ m: 1, width: '35ch' }}
                        
                    />
                </div>
        
                <div className="form-group col-md-6">
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="password1">Password</InputLabel>
                    <OutlinedInput
                        id="password1"
                        type={values.showPassword ? 'text' : 'password'}
                        //value={values.password}
                        onChange={handleChangePassword('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    </FormControl>
                </div>

                <div className="form-group col-md-6">
                    <FormControl sx={{ m: 1, minWidth: '35ch' }}>
                        <InputLabel htmlFor="role1">Role</InputLabel>
                        <Select
                        id="role1"
                        value={role}
                        label="Role"
                        onChange={handleChangeRole}
                        >

                        <MenuItem value="Verification Admin">Verification Admin</MenuItem>
                        <MenuItem value="Inventory Admin">Inventory Admin</MenuItem>
                        {/* <MenuItem value={30}>Thirty</MenuItem> */}
                        </Select>
                        <FormHelperText>Please select your role</FormHelperText>
                    </FormControl>
                    </div>

                </div>
            </Box>
            
            <Button sx={{marginLeft: 3}} type='submit' variant="contained">Login</Button>
            {/* <input type="submit" className="btn btn-primary" value='Login'/> */}

            </form>

            {/* <div className="form-group col-md-6">
                <label htmlFor="username1">Username</label>
                <input type="text" name="username" className="form-control" id="username2" aria-describedby="emailHelp" placeholder="Enter username"/>
                
            </div> */}
            {/* <div className="form-group col-md-6">
                <label htmlFor="exampleInputPassword1" >Password</label>
                <input type="password" name = "password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your username or password with anyone else.</small>
            </div> */}

            {/* <div className="form-group col-md-6">
                <label htmlFor="exampleInputPassword1" >Admin Branch</label>
                <input type="text" name = "adminBranch" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your username or password with anyone else.</small>
            </div> */}
             


            {/* <form onSubmit={handleSubmit}>

                Username: <input type='text' name='username'/><br/>
                Password: <input type='password' name='password'/><br/>
                <input type='submit' value='Login'/>
            </form> */}
            
        </div>
    );
}