import { Button, FormControl, Input } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from './Firebase';
import './Login.css'
function Login() {
    const history =useHistory();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const handleSignIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(history.push('/')).
        catch((error)=>alert(error.message))
    }
    const handleSignUp=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
            if(authUser){
                history.push('/')
            }
        }).catch(error=>error.message)
    }
    
    return (
        <div className="login" >
            <FormControl variant="outlined" color="primary">
                <img className="imgs" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazonlogo" />
                <span className="input1">Email: <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" color="primary" variant="outlined" /></span>
                <span className="input2">Password: <Input value={password}  type="password" onChange={(e)=>setPassword(e.target.value)}  color="primary" variant="outlined" /></span>
                <Button variant="outlined" color="primary" type="submit"  onClick={handleSignIn} >
                    Sign-IN
                </Button>
                <span className="content" ><p>By continuing, you agree to Amazon's<br/> 
                <a href="#" >Conditions of Use</a> and <a href="#" >
                 Privacy Notice</a></p></span>
                 <Button variant="outlined" color="primary" type="submit"  onClick={handleSignUp} >
                    Sign-UP
                </Button>
            </FormControl>
        </div>
    )
}

export default Login
