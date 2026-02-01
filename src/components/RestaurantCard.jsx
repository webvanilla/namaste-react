import React from 'react'
import { IMG_CDN_URL } from '../utilities/constants.js';
const RestaurantCard = (props) => {
    const {name,cloudinaryImageId,cuisines,avgRating,sla,locality}=props.data;
  return (
    <div className='res-card'>
        <img src={IMG_CDN_URL+cloudinaryImageId} alt="restaurant-logo" height="200" width="230"/>
        <div className='res-card-text'>
<h2>{name}</h2>
        <h3>{cuisines?.join(', ')}</h3>
       <div className='inline-layout'> <p>{avgRating}⭐</p>
        <p>{sla?.slaString}</p>
        </div>
          <p> {locality}</p>              </div>
        
    </div>
  )
}

export default RestaurantCard