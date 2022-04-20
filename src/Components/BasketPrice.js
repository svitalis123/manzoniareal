import React from 'react'
import './BasketPrice.css'
import {Button, FormControl} from '@material-ui/core'
import CurrencyFormat from 'react-currency-format';
import { useStateProvider } from '../StateProvider';
import {useHistory} from 'react-router-dom';
import { getProductTotal } from './reducer';
function BasketPrice() {
    const [{basket}]=useStateProvider();
    const history=useHistory();
    const handleCheckout=(e)=>{
        e.preventDefault();
        history.push('/payment');
    }
    return (
        <div className="basketprice" >
            <CurrencyFormat
              renderText={(value)=>(
                  <>
                    
                        <h3 className="checkoutbutton" >Total items({basket?.length}) <br/>Price: {value}</h3>
                    
                  </>
              )}
              value={getProductTotal(basket)}
              prefix={"$"}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={2}
            />
             <Button  type="submit" onClick={handleCheckout} variant="outlined" color="primary" >CheckOut</Button>
        </div>
    )
}

export default BasketPrice
