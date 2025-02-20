"use client";
import React, { useEffect, useState } from "react";
import "./search.css";
import { usePathname, useRouter } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${query}`);
    setQuery("");
  };

  useEffect(() => {
    setQuery(""); // Set an initial value after hydration
  }, []);
  const path = usePathname();

  if (path.endsWith("/signin") || path.endsWith("/signup")) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        name="query"
        placeholder="Search for movies..."
        className="search-input"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        required
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
