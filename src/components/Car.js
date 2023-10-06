import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faGasPump,
  faGaugeSimpleHigh,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import carImage from "../assets/car-mercedes.jpeg";

export function Car({ MockData }) {
  return (
    <div className="car-ui">
      {MockData.map((car) => (
        <div className="car-card">
          <img src={carImage} alt="car" />

          <div className="car-card-contents">
            <div className="car-title">
              <p className="car-name">{car.car_name}</p>
              <span className="car-year">{car.manf_year}</span>
            </div>
            <div className="car-details">
              <p>
                <FontAwesomeIcon icon={faPerson} /> {car.capacity} People
              </p>
              <p>
                <FontAwesomeIcon icon={faGasPump} /> {car.type}
              </p>
              <p>
                <FontAwesomeIcon icon={faGaugeSimpleHigh} /> {car.mileage}Km /
                litre
              </p>
              <p>
                <FontAwesomeIcon icon={faGear} /> Automatic
              </p>
            </div>
            <hr />
            <div className="car-pricing-and-btns">
              <div className="pricing">
                <h5>
                  ${car.rent_price}
                  <span style={{ fontSize: "15px" }}>/month</span>
                </h5>
              </div>
              <div className="btns">
                <button className="wishlist-btn">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className="rent-btn">Rent Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
