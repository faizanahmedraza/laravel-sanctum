import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Register = () => {
    const textFieldStyle = {
        margin:"10px 0px"
    };

    return (
        <Grid>
            <Paper elevation="24" style={{padding: 20, width: 400, height: "100%", margin: "10% auto"}}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Avatar style={{backgroundColor: "#3f51b5"}}><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <form>
                    <TextField label="Your Name" placeholder="Enter Your Name" fullWidth style={textFieldStyle} required/>
                    <TextField type="email" label="Email" placeholder="Enter Your Email" fullWidth style={textFieldStyle} required/>
                    <TextField type="password" label="Password" placeholder="Enter Password" fullWidth style={textFieldStyle} required/>
                    <TextField type="password" label="Confirm Password" placeholder="Re Enter Password" fullWidth style={textFieldStyle} required/>
                    <Button variant="contained" type='submit' color="primary" fullWidth style={{marginTop: "15px",...textFieldStyle}}>Sign up</Button>
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