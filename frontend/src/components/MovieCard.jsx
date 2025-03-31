import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to the movie details page
    navigate(`/movie/${movie._id}`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={movie.imageUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.genre}</p>
    </div>
  );
};

export default MovieCard;
