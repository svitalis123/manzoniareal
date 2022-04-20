import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header';
import Basket from './Basket';
import Payment from './Payment';
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { useStateProvider } from './StateProvider';
import Orders from './Orders';

const promise=loadStripe("pk_test_51IEDQeKJGFB7O5nzOiGAlqfL4w5zHyC3DpWIurCxSHys471n0aGyfm2DHVdaOMXw5dKkjxebx0wfinXxLGYgXSKr004MeqsiDE")
function App() {
  const [{basket, user}, dispatch]=useStateProvider();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:'Set_User',
          user:authUser,
        })
      }else{
        dispatch({
          type:'Set_User',
          user:null,
        })
      }
    })
  },[])
  console.log('this is the', user);
  return (
    <Router>    
      <div className="App">
        <Switch>
         <Route path="/orders">
           <Header/>
           <Orders/>
         </Route>

          <Route path="/payment">
            <Header/>
            <Elements stripe={promise} >
              <Payment/>
            </Elements>
          </Route>
          <Route path="/login" >
            <Header/>
            <Login/>
          </Route>
          <Route path="/basket" >
            <Header/>
            <Basket/>
          </Route>
          
          <Route path="/">
            <Header/>
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
