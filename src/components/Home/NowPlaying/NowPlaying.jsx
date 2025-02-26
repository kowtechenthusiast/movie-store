import Carousel from "@/components/Carousel/Carousel";

import React from "react";
export default async function NowPlaying({ genres }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
    },
  };
  const url = `https://api.themoviedb.org/3//movie/now_playing?page=1`;
  const response = await fetch(url, options);
  const data = await response.json();

  return (
    <div>
      <h3 className="movie-title">Now Playing Movies</h3>
      <Carousel data={data} genres={genres} title="now-playing" />
    </div>
  );
}
