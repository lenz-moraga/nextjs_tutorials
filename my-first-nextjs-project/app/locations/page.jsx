"use client";

import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";

export default function Locations() {
  const { data, loading, error } = useFetch("/location");

  useEffect(() => {}, [data]);

  return (
    <>
      <h2>Locations</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && data.results && (
        <ul>
          {data.results.map((location) => (
            <li key={location.id}>{location.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
