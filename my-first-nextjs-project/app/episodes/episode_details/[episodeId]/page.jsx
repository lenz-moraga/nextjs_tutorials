"use client";

import useFetch from "@/hooks/useFetch";
import React from "react";

export default function Episode({ params }) {
  const { episodeId } = params;
  const { data, loading, error } = useFetch(`/episode/${episodeId}`);

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
