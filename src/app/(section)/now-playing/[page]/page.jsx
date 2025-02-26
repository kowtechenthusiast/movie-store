import Result from "@/components/Result/Result";
import React from "react";

export const metadata = {
  title: "Now-Playing",
};

export default async function page({ params }) {
  const { page } = await params;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
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
