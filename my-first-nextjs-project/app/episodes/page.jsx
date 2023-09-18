"use client";

import useFetch from "@/hooks/useFetch";
import Link from "next/link";

export default function Episodes() {
  const { data, error } = useFetch("/episode");

  return (
    <>
      <h2>Episodes</h2>
      {error && <div>Error: {error.message}</div>}
      {data && data.results && (
        <ul>
          {data.results.map((episode) => (
            <li key={episode.id}>
              <Link href={`/episodes/episode_details/${episode.id}`}>
                {episode.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
