import Carousel from "@/components/Carousel/Carousel";

export default async function Popular({ genres }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
    },
  };

  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=AE`;
  const response = await fetch(url, options);
  const data = await response.json();

  return (
    <div>
      <h3 className="movie-title">Popular Movies</h3>
      <Carousel data={data} genres={genres} title="popular" />
    </div>
  );
}
