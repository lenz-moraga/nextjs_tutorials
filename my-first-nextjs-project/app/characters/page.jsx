"use client";

import Pagination from "@/components/Pagination";
import { getIdFromUrl } from "@/helpers/helpers";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Characters() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const name = searchParams.get("name") ?? "";

  const { data, loading, error } = useFetch("/character", {
    page,
    name,
  });

  return (
    <>
      <h2 className="text-gray-900 mb-6 inline-block text-2xl font-extrabold tracking-tight text-center w-full mt-4">
        Characters
      </h2>
      {loading && <div className="text-center w-full mb-4">Loading...</div>}
      {error && (
        <div className="text-center w-full mb-4">Error: {error.message}</div>
      )}
      {data && data?.results && (
        <>
          <ul className="grid grid-cols-2 gap-6 ">
            {data.results.map((character) => {
              let statusColor;

              switch (character.status) {
                case "Alive":
                  statusColor = "bg-green-500";
                  break;
                case "Dead":
                  statusColor = "bg-red-500";
                  break;
                case "unknown":
                  statusColor = "bg-gray-500";
                  break;
                default:
                  statusColor = "bg-gray-500";
                  break;
              }

              return (
                <li
                  className="rounded overflow-hidden shadow-lg flex flex-shrink-0"
                  key={character.id}
                >
                  <div className="h-full object-cover">
                    <Image
                      width={225}
                      height={225}
                      src={character.image}
                      alt={character.name}
                      priority={true}
                    />
                  </div>
                  <article className="px-6 py-4 flex flex-col gap-3">
                    <div>
                      <Link
                        className="font-bold text-xl mb-2"
                        href={`/characters/character_details/${character.id}`}
                      >
                        {character.id}. {character.name}
                      </Link>

                      <p className="flex flex-row justify-start gap-1 items-center">
                        <span
                          className={`block rounded h-2 w-2 ${statusColor}`}
                        />
                        {character.status} - {character.species}
                      </p>
                    </div>
                    <p className="flex flex-col">
                      <span className="text-gray-700 text-base">
                        Last known location:
                      </span>
                      {character.location.name === "unknown" ? (
                        character.location.name
                      ) : (
                        <Link
                          className="text-orange-600"
                          href={`/locations/location_details/${getIdFromUrl(
                            character.location.url
                          )}`}
                        >
                          {character.location.name}
                        </Link>
                      )}
                    </p>
                    <p className="flex flex-col">
                      <span className="text-gray-700 text-base">
                        First seen in:
                      </span>
                      {character.origin.name === "unknown" ? (
                        character.origin.name
                      ) : (
                        <Link
                          className="text-orange-600"
                          href={`/episodes/episode_details/${getIdFromUrl(
                            character.origin.url
                          )}`}
                        >
                          {character.origin.name}
                        </Link>
                      )}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
          <Pagination paginationInfo={{ ...data.info, currentPage: page }} />
        </>
      )}
    </>
  );
}
