import Result from "@/components/Result/Result";
import React from "react";

export default async function page({ params }) {
  const { page } = await params;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTk1MGNhNmI4Y2RjY2M3NTUyOGQ2NGNiYjY2MjM2MyIsIm5iZiI6MTczOTg3MjQ0OS41NjksInN1YiI6IjY3YjQ1OGMxMmY1ZGUxNTU3M2UwY2QxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3eSmiQQBrHMFAlnh_RwicsMTzh6UV6UrU4-bwOqjTKM",
    },
  };
  const url = `https://api.themoviedb.org/3//movie/now_playing?page=${page}`;
  const response = await fetch(url, options);
  const data = await response.json();

  return (
    <div>
      <Result result={data.results} />
    </div>
  );
}
