import Carousel from "@/components/Carousel/Carousel";

import React from "react";
export default async function NowPlaying({ genres }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTk1MGNhNmI4Y2RjY2M3NTUyOGQ2NGNiYjY2MjM2MyIsIm5iZiI6MTczOTg3MjQ0OS41NjksInN1YiI6IjY3YjQ1OGMxMmY1ZGUxNTU3M2UwY2QxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3eSmiQQBrHMFAlnh_RwicsMTzh6UV6UrU4-bwOqjTKM",
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
