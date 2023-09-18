"use client";

import useFetch from "@/hooks/useFetch";

export default function CharacterDetailsPage({ params }) {
  const { characterId } = params;
  const { data, loading, error } = useFetch(`/character/${characterId}`);

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
