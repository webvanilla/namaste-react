import React,{useState,useEffect} from 'react'
import { RESTAURANT_API } from './constants';

const useRestaurantList = () => {

    const [resData,setResData]=useState([]);

    const [filteredResData,setFilteredResData]=useState([]);

    useEffect(()=>{
        fetchRestaurants();
    },[])


   const fetchRestaurants=async()=>{
        const data=await fetch(RESTAURANT_API);
        const jsonData=await data.json();
        setResData(jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResData(jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


        console.log(resData)
       
   }
 return {
            resData,
            filteredResData,
            setFilteredResData
 }


}

export default useRestaurantList