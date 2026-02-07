import React,{ useState} from 'react'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router';
import useRestaurantList from '../utilities/useRestaurantList.js';
const RestaurantGrid = () => {
    const {resData,filteredResData,setFilteredResData}=useRestaurantList();
    const [searchedText,setSearchedText]=useState("");

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