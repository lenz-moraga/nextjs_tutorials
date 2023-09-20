import SearchBar from "@/components/SearchBar";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
