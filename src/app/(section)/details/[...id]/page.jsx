import React from "react";
import "./detail.css"; // Import CSS file

export default async function MovieDetails({ params }) {
  const { id } = await params;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  const urlID = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`;
  const response = await fetch(urlID);
  const data = await response.json();

  if (!data || data.success === false) {
    return <p className="sorry">Sorry... No Data Found</p>;
  }

  const {
    title,
    overview,
    release_date,
    vote_average,
    poster_path,
    backdrop_path,
    genres,
    original_language,
    production_companies,
    production_countries,
    spoken_languages,
    status,
    budget,
    revenue,
    runtime,
  } = data;

  return (
    <div className="movie-details">
      {/* Background Image */}
      {/* <div
        className="backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        }}
      >
        <div className="overlay"></div>
      </div> */}

      {/* Content Section */}
      <div className="content">
        {/* Movie Poster */}
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="poster"
          />
        )}

        {/* Movie Info */}
        <div className="info">
          <h1 className="title">{title}</h1>
          <p className="overview">{overview}</p>
          <p className="release">📅 Release Date: {release_date}</p>
          <p className="rating">⭐ Rating: {vote_average?.toFixed(1)}</p>
          <p className="language">
            🌍 Language: {original_language?.toUpperCase()}
          </p>

          {/* Genre Badges */}
          <div className="genres">
            {genres?.map((genre, index) => (
              <span key={index} className="genre">
                {genre.name}
              </span>
            ))}
          </div>

          {/* Additional Info */}
          <div className="additional-info">
            {status && <p>📌 Status: {status}</p>}
            {runtime > 0 && <p>⏳ Runtime: {runtime} min</p>}
            {budget > 0 && <p>💰 Budget: ${budget.toLocaleString()}</p>}
            {revenue > 0 && <p>📈 Revenue: ${revenue.toLocaleString()}</p>}
            {production_countries?.length > 0 && (
              <p>
                🌎 Country: {production_countries.map((c) => c.name).join(", ")}
              </p>
            )}
            {spoken_languages?.length > 0 && (
              <p>
                🗣 Languages:{" "}
                {spoken_languages.map((l) => l.english_name).join(", ")}
              </p>
            )}
          </div>

          {/* Production Companies */}
          <div className="production-companies">
            {production_companies?.map((company) => (
              <div key={company.id} className="company">
                {company.logo_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                    alt={company.name}
                    className="company-logo"
                  />
                )}
                <p>{company.name}</p>
              </div>
            ))}
          </div>
          <button className="favourite">Add Favourite</button>
        </div>
      </div>
    </div>
  );
}
