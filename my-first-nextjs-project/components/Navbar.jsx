"use client";

import useUrlParams from "@/hooks/useUrlParams";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { createQueryString } = useUrlParams();

  return (
    <nav className="flex px-4 space-x-4 bg-gray-900 text-white items-center justify-between">
      <h1 className="my-4  text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl sm:leading-[3.5rem]">
        The Rick and Morty API
      </h1>

      <ul className="flex space-x-4 items-center">
        <li>
          <Link
            className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
              pathname === "/" ? "bg-violet-700" : ""
            }`}
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
              pathname.includes("/characters") ? "bg-violet-700" : ""
            }`}
            href={`/characters?${createQueryString("page", "1")}`}
          >
            characters
          </Link>
        </li>
        <li>
          <Link
            className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
              pathname.includes("/locations") ? "bg-violet-700" : ""
            }`}
            href={"/locations"}
          >
            Locations
          </Link>
        </li>
        <li>
          <Link
            className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
              pathname.includes("/episodes") ? "bg-violet-700" : ""
            }`}
            href={"/episodes"}
          >
            Episodes
          </Link>
        </li>
      </ul>
    </nav>
  );
}
