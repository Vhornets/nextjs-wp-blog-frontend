import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBathtub,
  faBed,
  faCar,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import numeral from "numeral";

export const PropertyFeatures = ({
  bedrooms,
  bathrooms,
  has_parking,
  pet_friendly,
  price,
}) => {
  return (
    <div className="max-w-lg mx-auto my-3 bg-white text-black bg-opacity-90 p-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <FontAwesomeIcon icon={faBed} /> {bedrooms} bedrooms
        </div>
        <div>
          <FontAwesomeIcon icon={faBathtub} /> {bathrooms} bathrooms
        </div>
        {has_parking && (
          <div>
            <FontAwesomeIcon icon={faCar} /> has parking
          </div>
        )}
        {pet_friendly && (
          <div>
            <FontAwesomeIcon icon={faDog} /> pet friendly
          </div>
        )}
      </div>

      <div className="mt-4 text-4xl text-center">
        {numeral(price).format("$0,0")}
      </div>
    </div>
  );
};
