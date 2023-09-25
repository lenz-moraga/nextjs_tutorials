"use client";

import useUrlParams from "@/hooks/useUrlParams";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SearchBar() {
  const { createQueryString } = useUrlParams();

  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const handleSearch = (event) => {
    event.preventDefault();
    const searchNameValue = event.target[0].value;
    router.push(`/characters?${createQueryString("name", searchNameValue)}`);
  };

  return (
    <form
      className="flex items-center justify-center mt-4 gap-2 w-4/5"
      onSubmit={handleSearch}
    >
      <input
        className="w-1/2 px-3 h-8 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500"
        type="text"
        placeholder="Search by name"
        aria-label="Search"
        defaultValue={name}
      />
      <button
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
