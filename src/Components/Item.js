import { Button } from '@material-ui/core'
import React from 'react'
import { useStateProvider } from '../StateProvider'
import './Item.css'
function Item({title, description, imgurl, price, id, rating}) {

    const [{basket},dispatch]=useStateProvider();
    const addBasket=(e)=>{
        e.preventDefault();
        dispatch({
            type:"Add_To_Basket",
            item:{
                id:id,
                title:title,
                description:description,
                imgurl:imgurl,
                price:price,
                rating:rating,
            }
        })
    }
    return (
        <div className="item">
            <div className="item__container" >
                <div className="item__header" >
                    <div className="title"><h2>{title}</h2></div>
                    <div className="description" ><p>{description}</p></div>
                    <div className="price" ><h5>$11.99</h5></div>
                </div>
                <div className="myimage" ><img src={imgurl} alt="img" /></div>
                <div className="rating" >{Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                ))}</div>
                <Button type="submit" className="button" onClick={addBasket}  variant="outlined" color="primary" > Add to basket </Button>
            </div>
        </div>
    )
}

export default Item
