import React from 'react'
import './Basket.css'
import BasketPrice from './Components/BasketPrice';
import BasketProduct from './Components/BasketProduct'
import { useStateProvider } from './StateProvider'
function Basket() {
    const [{basket}]=useStateProvider();
    return (
        <div className="basket">
            <div className="basket__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/January/Fuji_LPHero_TopCat_en_US.png" alt="ad" />
                {
                   basket?.map((item)=>(
                    <BasketProduct id={item.id} title={item.title} description={item.description} imgurl={item.imgurl} rating={item.rating} price={item.price} />
                   )) 
                
                }
            </div>
            <div className="basket__right" >
                <BasketPrice/>
            </div>
        </div>
    )
}
export default Basket
