import { Input } from "components/Input";
import { useEffect, useState } from "react";
import queryString from "query-string";

export const Filters = ({ onSearch }) => {
  const [hasParking, setHasParking] = useState(false);
  const [petFriendly, setPetFriendly] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const {
      hasParking: hasParkingInitial,
      petFriendly: petFriendlyInitial,
      minPrice: minPriceInitial,
      maxPrice: maxPriceInitial,
    } = queryString.parse(window.location.search);

    setHasParking(hasParkingInitial === "true");
    setPetFriendly(petFriendlyInitial === "true");
    setMinPrice(minPriceInitial || "");
    setMaxPrice(maxPriceInitial || "");
  }, []);

  const handleSearch = () => {
    onSearch({ hasParking, petFriendly, minPrice, maxPrice });
  };

  return (
    <div className="max-w-5xl mx-auto my-5 flex items-end gap-5 border-solid border-slate-400 border-[1px] rounded-md p-4">
      <div className="flex-1">
        <div>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={hasParking}
              onChange={() => setHasParking(!hasParking)}
            />

            <span className="pl-2">has parking</span>
          </label>
        </div>

        <div>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={petFriendly}
              onChange={() => setPetFriendly(!petFriendly)}
            />

            <span className="pl-2">pet friendly</span>
          </label>
        </div>
      </div>

      <div className="flex-1">
        <span>Min price</span>

        <Input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>

      <div className="flex-1">
        <span>Max price</span>

        <Input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div>
        <div className="btn mb-0" onClick={handleSearch}>
          Search
        </div>
      </div>
    </div>
  );
};
