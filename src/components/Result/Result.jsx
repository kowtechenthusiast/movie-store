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
      Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
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
        {category !== "fav" && category !== "home" && <Pagination />}
      </>
    );
}
