import { MENU_URL } from '../utilities/constants.js';
import { useState,useEffect } from 'react';
const useRestaurantMenu = (id) => {


  const [menuData,setMenuData]=useState([]);
  const [restaurantData,setRestaurantData]=useState(null);


    useEffect(()=>{
    fetchMenu();
  },[])

   const fetchMenu = async ()=>{
    const data=await fetch(MENU_URL+id);

    const jsonData=await data.json();
setRestaurantData(jsonData?.data?.cards[2]?.card?.card?.info);
setMenuData(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
  }

  return{
    menuData,
    restaurantData
  }
  

}

export default useRestaurantMenu