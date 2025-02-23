import React from "react";
import Card from "../Card/Card";
import "./result.css";
import Link from "next/link";
import Pagination from "../Pagination/Pagination";

export default async function Result({ result, category }) {
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

  if (result == undefined) {
    return <p className="sorry">No data found</p>;
  } else
    return (
      <>
        <div className="card-container">
          {result.map((movie) => {
            const genreNames = movie.genre_ids?.map(
              (id) => genres.find((item) => item.id === id)?.name || "Unknown"
            );

            return (
              <Link key={movie.id} href={`/details/${movie.id}`}>
                <Card {...movie} genre={genreNames} />
              </Link>
            );
          })}
        </div>
        {category !== "fav" && <Pagination />}
      </>
    );
}
