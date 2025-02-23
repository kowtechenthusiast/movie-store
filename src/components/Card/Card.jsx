import React from "react";
import "./card.css";

export default function Card({
  title,
  poster_path,
  release_date,
  vote_average,
  genre,
}) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "/no-image.jpg"
        }
        alt={title}
      />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>

        {/* Display Genres as Badges */}
        <div className="genre-container">
          {genre?.map((g, index) => (
            <span key={index} className="genre-badge">
              {g}
            </span>
          ))}
        </div>

        <div className="card-info">
          <p>
            <strong>Release:</strong> {release_date}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {vote_average}
          </p>
        </div>
      </div>
    </div>
  );
}
