import { FormControl, Input } from '@material-ui/core'
import React, { useState } from 'react'
import './Header.css'
import { useHistory} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateProvider } from './StateProvider';
import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import {auth, storage, provider} from './Firebase'

  const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
      },
    
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function Header() {
    const history=useHistory();
    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const toBaske=()=>{
      history.push('/basket')
  }
  const tohom=()=>{
      history.push('/')
  }
  const handleorders=()=>{
      history.push("/orders")
  }
    const [{basket,user}]=useStateProvider();
     const handleGoogle=()=>{
        auth.signInWithPopup(provider).then((authUser)=>{
            console.log(authUser);
        }).catch((error)=>alert(error.message))
        setAnchorEl(null);
     }
     const handleLogin=()=>{
         history.push('/login');
         setAnchorEl(null);
     }
     const handleSignout=()=>{
         if(user){
             auth.signOut();
         }
     }
     
    return (

        <div className="header">
            <img onClick={tohom} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amzonologo"/>
            <div className="header__input" >
                <Input className="myinput" type="text" color="primary" placeholder="search" /><span><SearchIcon/></span>
            </div>
            <div  className="header__navigation" >
                
                <div onClick={handleSignout}  onMouseOver={(e)=>setAnchorEl(e.currentTarget)}  className="optio" >
                    <p> hello, {user?user?.email:'user'} </p>
                    <h3 >{user?'Sign-Out':'Sign-In'}</h3>
                </div>
                {
                    user?'': <Popover
                    
                    open={open}
                    anchorEl={anchorEl}
                    onClose={()=>setAnchorEl(null)}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}><FormControl>Sign in to enjoy more features<a href="#" onClick={handleGoogle}   >
                        Sign in with google</a><a href="#" onClick={handleLogin} >
                            <h3  >Sign in by username and password</h3>
                    </a>no account!😱😱 <a href="#" ><h5 style={{color:purple}} >create one</h5></a>click elsewhere to exit
                     </FormControl> </Typography>
                </Popover>
                }
               
            </div>
            <div  onClick={handleorders} className="option" >
                    <p>returns</p>
                    <h3 >& orders</h3>
            </div>
            <div onClick={toBaske} className="header__basket">
                <ShoppingBasketIcon /><span>{basket?.length}</span>
            </div>
        </div>
    )
}

export default Header

