"use client";

import { useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter, usePathname } from "next/navigation";
import queryString from "query-string";
import { Filters } from "./Filters";

export const PropertySearch = ({}) => {
  const [properties, setProperties] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const router = useRouter();
  const pathName = usePathname();
  const pageSize = 3;

  const search = async () => {
    const { page, hasParking, petFriendly, minPrice, maxPrice } =
      queryString.parse(window.location.search);

    const filters = {};

    if (minPrice) {
      filters.minPrice = parseInt(minPrice);
    }

    if (maxPrice) {
      filters.maxPrice = parseInt(maxPrice);
    }

    if (hasParking === "true") {
      filters.hasParking = true;
    }

    if (petFriendly === "true") {
      filters.petFriendly = true;
    }

    const response = await fetch("/api/search", {
      method: "post",
      body: JSON.stringify({
        page: parseInt(page || "1"),
        ...filters,
      }),
    });

    const data = await response.json();

    setProperties(data.properties);
    setTotalResults(data.total);
  };

  const handlePageClick = async (pageNumber) => {
    const { hasParking, petFriendly, minPrice, maxPrice } = queryString.parse(
      window.location.search
    );

    router.push(
      `${pathName}?page=${pageNumber}&hasParking=${
        hasParking === "true"
      }&petFriendly=${petFriendly === "true"}&minPrice=${
        minPrice || ""
      }&maxPrice=${maxPrice || ""}`
    );
  };

  useEffect(() => {
    search();
  }, []);

  const handleSearch = async ({
    hasParking,
    petFriendly,
    minPrice,
    maxPrice,
  }) => {
    router.push(
      `${pathName}?page=1&hasParking=${!!hasParking}&petFriendly=${!!petFriendly}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
  };

  return (
    <>
      <Filters onSearch={handleSearch} />
      <Results properties={properties} />
      <Pagination
        onPageClick={handlePageClick}
        totalPages={Math.ceil(totalResults / pageSize)}
      />
    </>
  );
};
