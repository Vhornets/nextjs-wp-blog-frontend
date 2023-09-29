import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBathtub,
  faBed,
  faCar,
  faDog,
} from "@fortawesome/free-solid-svg-icons";

export const PropertyCard = ({
  uri,
  featuredImage,
  title,
  propertyFeatures,
}) => {
  return (
    <Link
      href={uri}
      className="block p-3 bg-slate-100 hover:bg-slate-200 border-solid border-[1px] border-slate-300"
    >
      <Image
        alt="Property image"
        className="block w-full h-52 mb-3 object-cover"
        src={featuredImage.node.sourceUrl}
        width={300}
        height={200}
      />

      <h1 className="font-bold text-lg">{title}</h1>

      <div className="text-lg mb-3">
        {numeral(propertyFeatures.price).format("$0,0")}
      </div>

      <div className="flex justify-between mb-2 text-sm">
        <div>
          <FontAwesomeIcon icon={faBathtub} />
          <span className="pl-2">{propertyFeatures.bathrooms} bathrooms</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faBed} />
          <span className="pl-2">{propertyFeatures.bedrooms} bedrooms</span>
        </div>
      </div>

      {(!!propertyFeatures.hasParking || propertyFeatures.petFriendly) && (
        <div className="flex justify-between mb-2 text-sm">
          {!!propertyFeatures.petFriendly && (
            <div>
              <FontAwesomeIcon icon={faDog} />
              <span className="pl-2">pet friendly</span>
            </div>
          )}

          {!!propertyFeatures.hasParking && (
            <div>
              <FontAwesomeIcon icon={faCar} />
              <span className="pl-2">parking available</span>
            </div>
          )}
        </div>
      )}
    </Link>
  );
};
