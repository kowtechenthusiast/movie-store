import NowPlaying from "@/components/Home/NowPlaying/NowPlaying";
import Popular from "@/components/Home/Popular/Popular";
import TopRated from "@/components/Home/TopRated/TopRated";
import Upcoming from "@/components/Home/Upcoming/Upcoming";
import React from "react";

export const metadata = {
  title: "Home | Movie Store",
};

export default async function page() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTk1MGNhNmI4Y2RjY2M3NTUyOGQ2NGNiYjY2MjM2MyIsIm5iZiI6MTczOTg3MjQ0OS41NjksInN1YiI6IjY3YjQ1OGMxMmY1ZGUxNTU3M2UwY2QxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3eSmiQQBrHMFAlnh_RwicsMTzh6UV6UrU4-bwOqjTKM",
    },
  };

  const url = "https://api.themoviedb.org/3//genre/movie/list";
  const res = await fetch(url, options);
  const data = await res.json();
  const genres = data.genres;
  return (
    <div style={{ paddingTop: "30px" }}>
      <Popular genres={genres} />
      <TopRated genres={genres} />
      <NowPlaying genres={genres} />
      <Upcoming genres={genres} />
    </div>
  );
}
