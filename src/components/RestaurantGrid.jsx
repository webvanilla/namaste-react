import React,{ useContext, useState} from 'react'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router';
import useRestaurantList from '../utilities/useRestaurantList.js';
import UserContext from '../utilities/UserContext.js';
const RestaurantGrid = () => {
    const {resData,filteredResData,setFilteredResData}=useRestaurantList();
    const [searchedText,setSearchedText]=useState("");
   
    const {loggedInUser,setUser}=useContext(UserContext);

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
  <div style={{marginTop:"10px"}}>
    <label>Change display name: </label>
      <input type="text" value={loggedInUser} onChange={(e)=>setUser(e.target.value)}/>

  </div>
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