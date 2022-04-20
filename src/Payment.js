
import React, { useEffect, useState } from 'react'
import BasketProduct from './Components/BasketProduct';
import './Payment.css'
import {useHistory} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format'
import { useStripe,useElements,CardElement} from '@stripe/react-stripe-js'
import { useStateProvider } from './StateProvider'
import { getProductTotal } from './Components/reducer';
import { Button } from '@material-ui/core';
import axios from './Components/Axios'
import { AddAlertOutlined } from '@material-ui/icons';
import db from './Firebase';
function Payment() {
    const [{basket, user}, dispatch]=useStateProvider();
    const stripe=useStripe();
    const elements=useElements();
    const [disabled,setDisabled]=useState(true);
    const [succeded, setSucceded]=useState(false);
    const [error, setError]=useState(null);
    const [processing, setProcessing]=useState('');
    const [clientSecret, setClientSecret]=useState(true);
    const history=useHistory();
    
    useEffect(()=>{
        const getClientSecret=async()=>{
            const content=await axios({
                method:'post',
                url:`/payments/create?total=${getProductTotal(basket)*100}`,
            })
            setClientSecret(content.data.clientSecret);
        }
        getClientSecret();
    },[basket])
   

    const handleSubmit= async(e)=>{
        e.preventDefault()
        setProcessing(true);

        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            
                   db.collection('users').doc(user?.email).collection('orders').doc(paymentIntent?.id).set({
                       basket:basket,
                       amount:paymentIntent?.amount,
                       created:paymentIntent?.created,

                   })       


                setSucceded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type:'Delete_basket'
                })
                history.push("/orders");

            
        })
    }
    const handleChange=(e)=>{
        setDisabled(e.empty)
        setError(e.error?e.error.message:'')
    }
    return (

        <div className="payment" >
            <div className="row">
                <div className="rowleft" >
                    <h3>Details</h3>
                </div>
                <div className="rowright" >
                    <h5>Email: <span>user@gmail.com</span></h5>
                    <h5>Address: <span>P.O Box 60200 Nairobi</span></h5>
                    <h5>Phone: <span>0700002003</span></h5>
                </div>
            </div>
            <div className="row">
                <div className="rowleft" >
                    <h3>Orders</h3>
                </div>
                <div className="rowright" >
                    {
                        basket.map((item)=>(
                            <BasketProduct id={item.id} title={item.title} description={item.description} imgurl={item.imgurl} rating={item.rating} price={item.price} />
                           )) 
                    }
                </div>
            </div>
            <div className="row">
                <div className="rowleft" >
                  <h3>Payment</h3>
                </div>
                <div className="rowright" >
                   <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        
                        <CurrencyFormat
                                renderText={
                                   
                                    (value)=>(
                                        <>
                                        <h5>Items({basket?.length}) <br/> Total: {value}</h5>
                                        </>
                                    )
                                    
                                }
                                value={getProductTotal(basket)}
                                decimalScale={2}
                                thousandSeparator={true}
                                displayType={'text'}
                                prefix={'$'}                          
                            />
                            <div>{succeded? <h3>Payment Succesful</h3>:''}</div>

                            <button className="buttona" color="primary" variant ="outlined" disabled={disabled || processing || succeded} >
                              {processing ? <p>processing</p>:'Paynow'}
                            </button>
                            
                                {error && <div>{error}</div>}
                   </form>
                   
                </div>
            </div>

        </div>
    )
}

export default Payment
