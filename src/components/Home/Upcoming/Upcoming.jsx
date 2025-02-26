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
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTk1MGNhNmI4Y2RjY2M3NTUyOGQ2NGNiYjY2MjM2MyIsIm5iZiI6MTczOTg3MjQ0OS41NjksInN1YiI6IjY3YjQ1OGMxMmY1ZGUxNTU3M2UwY2QxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3eSmiQQBrHMFAlnh_RwicsMTzh6UV6UrU4-bwOqjTKM",
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
