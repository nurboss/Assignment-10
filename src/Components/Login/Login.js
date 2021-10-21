import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hook/useAuth';
import './Login.css'
import icon1 from '../../images/google.png';
import icon2 from '../../images/img-icom.png';

const Login = () => {
    const {signInUsingGoogle, signInUsingGithub, handleRegistration, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'


    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(res => {
            history.push(redirect_uri);
        });
    }

    const handleGithubLogin = () => {
        signInUsingGithub()
        .then(res => {
            history.push(redirect_uri);
        });
    }


    return (
        <div className="login">
           
            <div className="boxes">
            <h2 className="title">{isLogin ? "Please Login" : "Please Register"}</h2>
                <form className="from" onSubmit={handleRegistration}>
                    <div className="text-center text-danger error"><p>{error}</p></div>
                
                    <div className="input-box">
                        <input onBlur={handleEmailChange} type="email" placeholder="Email" required/>
                    </div>
                    <div className="input-box">
                        <input onBlur={handlePasswordChange} type="password" placeholder="passsword" required/>
                    </div>
                    <div className="cheakbox">
                    <input  onChange={toggleLogin} type="checkbox"/>
                    <label for="vehicle1"> Already Registered?</label>
                    </div>
                    <div className="input-button">
                        <input type="submit" value={isLogin ? "Login" : "Register"}/>
                    </div>
               
                </form>
                    <div className="signin">
                        <button className="buttn" onClick={handleGoogleLogin}>Google Signin <img style={{width: "25px"}} src={icon1} alt="" /></button>
                        <button className="buttn" onClick={handleGithubLogin}>Github Signin <img style={{width: "25px"}} src={icon2} alt="" /></button>
                    </div>
            </div>
        </div>
    );
};

export default Login;