"use client";

import useFetch from "@/hooks/useFetch";
import React from "react";

export default function Location({ params }) {
  const { locationId } = params;
  const { data, loading, error } = useFetch(`/location/${locationId}`);

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {data && data.name && (
        <div>
          <h1>{data.name}</h1>
        </div>
      )}
    </div>
  );
}
