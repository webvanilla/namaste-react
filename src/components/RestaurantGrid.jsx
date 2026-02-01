import React,{useEffect, useState} from 'react'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router';
import { RESTAURANT_API } from '../utilities/constants.js';
const RestaurantGrid = () => {
    const [resData,setResData]=useState([]);
    const [searchedText,setSearchedText]=useState("");
    const [filteredResData,setFilteredResData]=useState([]);

    const fetchRestaurants=async()=>{
        const data=await fetch(RESTAURANT_API);
        const jsonData=await data.json();
        setResData(jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResData(jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(()=>{
        fetchRestaurants();
    },[])

    const onSearch= ()=>{
const filteredData= resData.filter((restaurant)=>{
  return restaurant?.info?.name?.toLowerCase().includes(searchedText?.toLowerCase());
})
setFilteredResData(filteredData);

    }

  return (
    <div>
<div>
  <input type="text" placeholder='Search for restaurants...' value={searchedText} onChange={(event)=>setSearchedText(event.target.value)}/>
  <button onClick={onSearch}>Search</button>
</div>
   
    <div className='res-grid'>
       {filteredResData?.map((restaurant)=>{
        return <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}><RestaurantCard  data={restaurant?.info} /></Link>
       })}


    </div>
     </div>
  )
}

export default RestaurantGrid