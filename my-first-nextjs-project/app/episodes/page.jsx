// "use client";

import Link from "next/link";

import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`
  query {
    episodes(page: 1, filter: { name: "" }) {
      info {
        count
      }
      results {
        name
      }
    }
  }
`;

export default async function Episodes() {
  const { data, error } = await getClient().query({ query });
  const { results: episodes } = data.episodes;

  return (
    <>
      <h2>Episodes</h2>
      {error && <div>Error: {error.message}</div>}
      {episodes && (
        <ul>
          {episodes.map((episode) => (
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
