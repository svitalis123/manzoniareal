import React from 'react'
import './Order.css'
import moment from 'moment';
import BasketProduct from './BasketProduct';
import CurrencyFormat from 'react-currency-format';
function Order({order}) {
    return (
        <div className="order">
            <h5>Order</h5>
            <span>Time: {moment.unix(order.data.created).format('MMMM Do YYYY, h:mm:ss a')}</span>
            <p className="order__id" >
                <small>Orderid: {order.id}</small>
            </p>
            {
                order.data.basket.map((item)=>(
                    <BasketProduct 
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    imgurl={item.imgurl}
                    rating={item.rating} 
                    price={item.price}
                    hideButton
                    />
                ))
            }
            <div className="ordertotal" >
            <CurrencyFormat 
                renderText={(value)=>(
                    <>
                    <h3>Order Total: {value}</h3>
                    </>
                )}
                value={order.data.amount / 100}
                decimalScale={2}
                prefix={"$"}
                thousandSeparator={true}
                displayType={"text"}
            
            />
            </div>
            
        </div>
    )
}

export default Order
