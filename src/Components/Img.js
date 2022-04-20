import React from 'react'
import {Slide} from 'react-slideshow-image'
import './Img.css'
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg',

  ];
const Img=() =>{
    return (
        <div className="theimg">
        <Slide easing="ease">
          <div className="each-slide">
            <div className="img1" style={{'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div className="img1" style={{'backgroundImage': `url(${slideImages[1]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div className="img1" style={{'backgroundImage': `url(${slideImages[2]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div className="img1" style={{'backgroundImage': `url(${slideImages[3]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div className="img1" style={{'backgroundImage': `url(${slideImages[4]})`}}>
             

            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Img