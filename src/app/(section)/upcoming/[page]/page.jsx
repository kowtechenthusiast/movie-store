import React from "react";
import Result from "@/components/Result/Result";

export const metadata = {
  title: "Up-Coming",
};

export default async function Upcoming({ params }) {
  const { page } = await params;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
    },
  };
  const url = `https://api.themoviedb.org/3//movie/upcoming?language=en-US&region=US&page=${page}`;
  const response = await fetch(url, options);
  const data = await response.json();

  return (
    <div>
      <Result result={data.results} />
    </div>
  );
}
