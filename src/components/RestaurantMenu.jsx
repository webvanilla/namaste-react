import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import { MENU_URL } from '../utilities/constants.js';
import ItemCard from './ItemCard.jsx';
const RestaurantMenu = () => {
  const {id}=useParams();

  const [menuData,setMenuData]=useState([]);
  const [restaurantData,setRestaurantData]=useState(null);
  const fetchMenu = async ()=>{
    const data=await fetch(MENU_URL+id);

    const jsonData=await data.json();
setRestaurantData(jsonData?.data?.cards[2]?.card?.card?.info);
setMenuData(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
  }

  useEffect(()=>{
    fetchMenu();
  },[])

  return menuData.length===0 ? <h1>Loading...</h1> : (
    <div>
      <div className='res-info'>
      <div>
  <h2>{restaurantData?.name} </h2>
        <h4>{restaurantData?.cuisines?.join(', ')}</h4>
        <h4> {restaurantData?.locality}</h4>
        <h4>{restaurantData?.costForTwoMessage}</h4>
      </div>
 <h4>{restaurantData?.avgRating}⭐  </h4>
       
</div>
        <h1>Menu</h1> 

        {menuData?.map((item)=>{
            return <ItemCard key={item?.card?.info?.id} data={item?.card?.info}/>
})}
    </div>
  )
}

export default RestaurantMenu;