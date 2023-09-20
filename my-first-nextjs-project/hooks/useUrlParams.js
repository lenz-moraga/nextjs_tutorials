import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

export default function useUrlParams() {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return { createQueryString };
}
