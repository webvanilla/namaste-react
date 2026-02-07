import { useParams } from 'react-router';
import ItemCard from './ItemCard.jsx';
import useRestaurantMenu from '../utilities/useRestaurantMenu.js';
const RestaurantMenu = () => {
  const {id}=useParams();

  const {menuData,restaurantData}=useRestaurantMenu(id);
 

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