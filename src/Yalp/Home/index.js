import { Link } from "react-router-dom";
import db from "../Database"
function Home() {
  const restaurants = db.restaurants
  return (
    <div style={{marginTop:"300px"}}>
      <div style={{display:"flex", justifyContent:"center", }}>
        <span style={{fontSize:"20px", fontWeight:"bold", marginTop:"20px"}}>Recent Activity</span>
      </div>
      <div>
        <div className="list-group">
          {restaurants.map((restaurant) => (
            <Link key={restaurant._id} to={`/Yalp/Restaurants/${restaurant._id}`} className="list-group-item">
              {restaurant.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home;