import { createSearchParams } from "@/helpers/helpers";
import { useEffect, useState } from "react";

export default function useFetch(
  url,
  searchParams = {
    page: "1",
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "", // female, male, genderless or unknown
  }
) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = createSearchParams(searchParams);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://rickandmortyapi.com/api${url}/?${params}`
        );

        const result = await response.json();
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(result.error);
          } else {
            throw new Error("Network response was not ok");
          }
        }

        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [params, url]);

  return { data, error, loading };
}
