import React from "react";
import Result from "@/components/Result/Result";

export const generateMetadata = async ({ params }) => {
  const { searchTerm } = await params;

  return {
    title: `Search for ${searchTerm[0]}`,
  };
};

export default async function Search({ params }) {
  const { searchTerm } = await params;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
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
