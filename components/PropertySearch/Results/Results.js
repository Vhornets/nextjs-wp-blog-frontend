import Image from "next/image";
import { PropertyCard } from "./PropertyCard";

export const Results = ({ properties }) => {
  return (
    <div className="max-w-5xl my-4 mx-auto grid grid-cols-3 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.databaseId} {...property} />
      ))}
    </div>
  );
};
