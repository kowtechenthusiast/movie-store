import Card from "@/components/Card/Card";
import Carousel from "@/components/Carousel/Carousel";
import Result from "@/components/Result/Result";
import Link from "next/link";
import React from "react";

export default async function TopRated({ genres }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
    },
  };
  const url = `https://api.themoviedb.org/3//movie/top_rated?language=en-US&page=1&region=INDIA`;
  const response = await fetch(url, options);
  const data = await response.json();
  return (
    <div>
      <h3 className="movie-title">Top Rated Movies</h3>
      <Carousel data={data} genres={genres} title="top-rated" />
    </div>
  );
}
