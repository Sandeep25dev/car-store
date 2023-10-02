import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPerson } from "@fortawesome/free-solid-svg-icons";
import carImage from "../assets/car-mercedes.jpeg";
export function Car() {
  return (
    <div className="car-card">
      <div className="card-contents">
        <img className="car-img" src={carImage} alt="car" />
        <div className="car-title">
          <p className="car-name">Mercedes Sport</p>
          <span className="car-year">2022</span>
        </div>
        <div className="car-details">
          <span>
            <FontAwesomeIcon icon={faPerson} /> 4 People
          </span>
          <span>Hybrid</span>
          <span>6.1Km / litre</span>
          <span>Automatic</span>
        </div>
        <hr />
        <div className="pricing-and-btns">
          <h3>
            $620
            <span style={{ fontSize: "15px", fontWeight: "400" }}>/month</span>
          </h3>

          <div className="btns">
            <button className="wishlist-btn">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="rent-btn">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
