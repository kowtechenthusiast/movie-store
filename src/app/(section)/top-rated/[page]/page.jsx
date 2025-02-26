import React from "react";
import Result from "@/components/Result/Result";

export const metadata = {
  title: "Top-Rated",
};

export default async function TopRated({ params }) {
  const { page } = await params;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
    },
  };
  const url = `https://api.themoviedb.org/3//movie/top_rated?language=en-US&page=${page}&region=INDIA`;
  const response = await fetch(url, options);
  const data = await response.json();

  return (
    <div>
      <Result result={data.results} />
    </div>
  );
}
