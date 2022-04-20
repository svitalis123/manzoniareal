import React from 'react'
import Img from './Components/Img'
import Item from './Components/Item'
import './Home.css'
function Home() {
    return (
        <div className="home">
            <div className="mymg">
             <Img  />
            </div>
            
           
                <div className="home__row" >
                    <Item
                    id={3445}
                    title="Belkin SoundForm Kids Wireless Headphones"
                    description="Belkin SoundForm Kids Wireless Headphones with Built in"
                    imgurl="https://m.media-amazon.com/images/I/51QL9pV-1qL._AC_UY218_.jpg"
                    price={19.99}
                    rating={5}
                    />
                    <Item
                    id={3348}
                    title="Hi-Fi Smart Speaker"
                    description="Belkin SoundForm Elite Hi-Fi Smart Speaker + Wireless Charger"
                    imgurl="https://m.media-amazon.com/images/I/81XjQOJdLwL._AC_UY218_.jpg"
                    price={143.99}
                    rating={4}
                    />
                </div>
                <div className="home__row" >
                <Item
                    id={3647}
                    title="Stripe T-Shirt"
                    description="YunJey Round Neck Triple Color Block Stripe T-Shirt"
                    imgurl="https://images-na.ssl-images-amazon.com/images/I/51Icrvma7ZL._SCLZZZZZZZ___AA300_.jpg"
                    price={12.79}
                    rating={5}
                    />
                    <Item
                    id={3244}
                    title="Wireless Earbuds"
                    description=" Occiam Bluetooth Headphones 48H Play Back Earphones "
                    imgurl="https://m.media-amazon.com/images/I/61cLu+0jalL._AC_UY218_.jpg"
                    price={34.99}
                    rating={4}
                    />
                    <Item
                    id={3841}
                    title="Wireless Headphones"
                    description="Belkin SoundForm Kids Wireless Headphones with Built"
                    imgurl="https://m.media-amazon.com/images/I/81D3aL3-CBL._AC_UY218_.jpg"
                    price={19.99}
                    rating={5}
                    />
                </div>
                <div className="home__row" >
                <Item
                    id={3549}
                    title="trail camera day"
                    description="night ultra fast motion"
                    imgurl="https://m.media-amazon.com/images/I/91ZNcn2WDhL._AC_UL320_.jpg"
                    price={79.99}
                    rating={4}
                    />
                </div>
            
        </div>
    )
}

export default Home
