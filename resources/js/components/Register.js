import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { emailValidation, passwordValidation } from './utils/regex';
import axios from "react";
import {Grid, Paper, Avatar, TextField, Button, Typography} from '@material-ui/core';
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Register = () => {
    const textFieldStyle = {
        margin:"10px 0px"
    };

    const [disabled, setDisabled] = useState(false);
    const [errorArray, setErrorArray] = useState(false);
    const [successArray, setsuccessArray] = useState(false);
    const [passMatch, SetPassMatch] = useState(false);
    const [pass, Setpass] = useState('');
    const [confirmPass, SetconfirmPass] = useState('');
    const { register, handleSubmit, errors, reset } = useForm();

    const handleChange = () => {

    }
    const onSubmitRegister = () => {

    }

    return (
        <Grid>
            <Paper elevation="24" style={{padding: 20, width: 400, height: "100%", margin: "10% auto"}}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Avatar style={{backgroundColor: "#3f51b5"}}><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <form action="#" onSubmit={handleSubmit(onSubmitRegister)}>
                    <TextField label="Your Name" placeholder="Enter Your Name" {...register('name',{
                        required: true, minLength: 1 })} onChange={handleChange} fullWidth style={textFieldStyle} required/>
                    {errors.name && <p className="errorCSS">Name is required *</p>}
                    <TextField type="email" label="Email" {...register('email',{
                        required: true,
                        pattern: emailValidation
                    })} placeholder="Enter Your Email"  fullWidth style={textFieldStyle} required/>
                    {errors.email && <p className="errorCSS">Email is required *</p>}
                    <TextField type="password" label="Password" {...register('password',{
                        required: true,
                        pattern: passwordValidation
                    })} onChange={e => Setpass(e.target.value)} placeholder="Enter Password" fullWidth style={textFieldStyle} required/>
                    {errors.password && <p className="errorCSS">Password is required eg:asdF1@as *</p>}
                    <TextField type="password" label="Confirm Password" onChange={e => SetconfirmPass(e.target.value)}
                               onFocus={() => SetPassMatch(false)}
                               {...register('confirmation_password',{
                                   required: true,
                                   minLength: 8,
                                   pattern: passwordValidation
                               })} placeholder="Re Enter Password" fullWidth style={textFieldStyle} required/>
                    <Button variant="contained" type='submit' color="primary" fullWidth style={{marginTop: "15px",...textFieldStyle}} disabled={disabled}>Sign up</Button>
                    <Typography>Already have an account?
                        <Link exact to="/login">
                            Sign in
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
}

export default Register;