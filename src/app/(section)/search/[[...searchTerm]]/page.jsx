import React from "react";
import Result from "../../../../../components/Result/Result";

export default async function Search({ params }) {
  const searchTerm = await params?.searchTerm;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTk1MGNhNmI4Y2RjY2M3NTUyOGQ2NGNiYjY2MjM2MyIsIm5iZiI6MTczOTg3MjQ0OS41NjksInN1YiI6IjY3YjQ1OGMxMmY1ZGUxNTU3M2UwY2QxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3eSmiQQBrHMFAlnh_RwicsMTzh6UV6UrU4-bwOqjTKM",
    },
  };

  const url = `https://api.themoviedb.org/3//search/movie?query=${searchTerm}&page=1`;
  const res = await fetch(url, options);
  const result = await res.json();

  return (
    <>
      <p
        className="about-result"
        style={{
          marginTop: "50px",
          marginLeft: "5vw",
          fontSize: "2rem",
          color: "rgb(84, 83, 83)",
        }}
      >
        Search results for "{searchTerm}"
      </p>
      <Result result={result.results} />;
    </>
  );
}
