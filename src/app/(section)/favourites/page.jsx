import Result from "@/components/Result/Result";
import React from "react";
import { getUserEmail } from "@/lib/actions/auth";

export const metadata = {
  title: "Favourites",
};

export default async function page() {
  const email = await getUserEmail();

  const response = await fetch(`/api/getFav`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (data.favourites.length === 0) {
    return <p className="sorry">No favourites found</p>;
  }

  const movieRequest = data.favourites.map((fav) =>
    fetch(
      `https://api.themoviedb.org/3/movie/${fav}?api_key=${process.env.API_KEY}`
    ).then((response) => response.json())
  );

  const result = await Promise.all(movieRequest);
  return <Result result={result} category="fav" />;
}
