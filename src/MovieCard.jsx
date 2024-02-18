import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.year}</p>
      </div>

      <div>
        <img src={movie.large_cover_image} alt={movie.title} />
      </div>
      <div>
        <span>{movie.genres.join(" | ")}</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
