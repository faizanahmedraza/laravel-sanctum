import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    withStyles,
    Typography
} from '@material-ui/core';
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const BlueCheckBox = withStyles({
    root: {
        color: "#3f51b5",
        '&$checked': {
            color: "#3f51b5",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props}/>);

const Login = () => {
    const [checked, setChecked] = useState(false);
    const { register, handleSubmit, errors, reset } = useForm();

    const Login = (details) => {
        console.log(details);
    }

    const Logout = () => {

    }

    return (
        <Grid>
            <Paper elevation="24" style={{padding: 20, width: 400, height: "100%", margin: "10% auto"}}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Avatar style={{backgroundColor: "#3f51b5"}}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form>
                    <TextField label="User Name" placeholder="Enter User Name" fullWidth required
                               style={{margin: "10px 0px"}}/>
                    <TextField type="password" label="Password" placeholder="Enter Password" fullWidth required/>
                    <FormControlLabel
                        control={<BlueCheckBox name="remember_me" style={{margin: "10px 0px"}} onChange={() => setChecked(!checked)} checked={checked} ref={register}/>}
                        label="Keep me signed in"
                    />
                    <Button variant="contained" type='submit' color="primary" fullWidth style={{margin: "10px 0"}}>Sign
                        in</Button>
                    <Typography style={{marginTop: "10px"}}>
                        <Link href="#">
                            Forgot Password?
                        </Link>
                    </Typography>
                    <Typography>Do you have an account?
                        <Link to="/register">
                            Sign up
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
}

export default Login;