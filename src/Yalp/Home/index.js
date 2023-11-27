import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import db from "../Database";
import logo from "../assets/logo.jpg";
import {
  faFaceSmile,
  faStar,
  faUtensilSpoon,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const restaurants = db.restaurants;

  return (
    <div style={{ marginTop: "300px", fontFamily: "Gill Sans, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          Recent Activity
        </span>
      </div>
      <div style={{ alignItems: "center", justifyContent: "center" }}>
        <div
          className="d-flex"
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "2px solid #ddd",
          }}
        >
          {restaurants.map((restaurant, index) => (
            <Link
              key={restaurant._id}
              to={`/Yalp/Restaurants/${restaurant._id}`}
              className="list-group-item"
            >
              <div
                style={{
                  width: "600px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "30px",
                }}
              >
                <div style={{ padding: "5px", border: "1px solid #ddd" }}>
                  <div className="row d-flex">
                    <div style={{ width: "50px", fontSize: "30px" }}>
                      <FontAwesomeIcon
                        icon={faFaceSmile}
                        style={{ color: "#ddd" }}
                      ></FontAwesomeIcon>
                    </div>
                    <div
                      className="col"
                      style={{ fontFamily: "Gill Sans, sans-serif" }}
                    >
                      <span style={{ fontWeight: "bold" }}>Lisa</span>
                      <br />
                      <span>Write a review</span>
                    </div>
                  </div>
                  <img src={logo} alt="Logo" className="logo" />
                  <div>
                    <span style={{ fontSize: "15px", color: "#87CEEB" }}>
                      {restaurant.name}
                    </span>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#d22222" }}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#d22222" }}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#d22222" }}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#d22222" }}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#d22222" }}
                    ></FontAwesomeIcon>
                  </div>
                  <div>
                    <span style={{ fontSize: "13px" }}>
                      {restaurant.description}
                    </span>
                  </div>
                  <div>
                    <span style={{ fontSize: "13px", color: "#87CEEB" }}>
                      read more
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span
          style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}
        >
          Categories
        </span>
      </div>
      <div
        className="d-flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div
          style={{
            width: "600px",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <FontAwesomeIcon
              icon={faUtensilSpoon}
              style={{ color: "#d22222", fontSize: "80px" }}
            ></FontAwesomeIcon>
            <br />
            <span style={{ fontSize: "20px" }}>Restaurants</span>
          </div>
        </div>
        <div
          style={{
            width: "600px",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <FontAwesomeIcon
              icon={faShoppingBag}
              style={{ color: "#d22222", fontSize: "80px" }}
            ></FontAwesomeIcon>
            <br />
            <span style={{ fontSize: "20px" }}>Shopping</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
