import { Button } from '@material-ui/core'
import React from 'react'
import { useStateProvider } from '../StateProvider'
import './BasketProduct.css'
function BasketProduct({id, title, description, imgurl, rating, price, hideButton}) {
    const [{basket},dispatch]=useStateProvider();
    const handleRemove=(e)=>{
        e.preventDefault();
        dispatch({
            type:'Remove_From_Basket',
            id:id
        })
    }
    return (
        <div className="basketproduct" >
            <img src={imgurl} alt="productimg" />
            <div className="basketproductcontain" >

            
            <div className="basketproduct__top" >
                <h2>{title}</h2>
                <div className="description" >
                    <h5>{description}</h5>
                </div>
                <h3>${price}</h3>
            </div>
            <div className="therating" >
                {
                    Array(rating).fill()?.map((_,i)=>(
                        <p>⭐</p>
                    ))
                }
            </div>
            {!hideButton &&
             <Button className="removebutton" type="submit" onClick={handleRemove} color="secondary"  variant="outlined" >Remove from Basket</Button>}
            
            </div>
        </div>
    )
}

export default BasketProduct
