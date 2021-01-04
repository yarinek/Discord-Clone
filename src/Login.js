import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {
    const singIn = () => {
        //Google login
        auth.signInWithPopup(provider)
            .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/sco/9/98/Discord_logo.svg" alt="" />
            </div>
            <Button onClick={singIn}>Sing In</Button>
        </div>
    )
}

export default Login
