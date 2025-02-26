import Card from "@/components/Card/Card";
import Carousel from "@/components/Carousel/Carousel";
import Result from "@/components/Result/Result";
import Link from "next/link";
import React from "react";

export default async function Upcoming({ genres }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
    },
  };
  const url = `https://api.themoviedb.org/3//movie/upcoming?language=en-US&region=US&page=1`;
  const response = await fetch(url, options);
  const data = await response.json();
  return (
    <div>
      <h3 className="movie-title">Up Coming Movies</h3>
      <Carousel data={data} genres={genres} title="upcoming" />
    </div>
  );
}
