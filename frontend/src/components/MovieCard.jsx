import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to the movie details page
    navigate(`/movie/${movie._id}`);
  };

  return (
    <div className="movie-card" onClick={handleClick} style={{ cursor: 'pointer', border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <img src={movie.imageUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.genre}</p>
    </div>
  );
};

export default MovieCard;
