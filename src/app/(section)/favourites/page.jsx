import Result from "@/components/Result/Result";
import { cookies } from "next/headers";
import React from "react";
import jwt, { decode } from "jsonwebtoken";
export default async function page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/getFav`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: decoded.email }),
    }
  );

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
