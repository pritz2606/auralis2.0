import React from 'react';
import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state; // Assuming movie details are passed via state

  const handleWatchClick = () => {
    window.open('https://streamable.com/8v6rg0', '_blank');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{movie.title}</h1>
      <img src={movie.imageUrl} alt={movie.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}</p>
      <p><strong>Rating:</strong> {movie.rating ? movie.rating : 'N/A'}</p>
      <button onClick={handleWatchClick} style={{ padding: '10px 15px', border: 'none', borderRadius: '5px', backgroundColor: '#646cff', color: '#fff', cursor: 'pointer' }}>
        Watch
      </button>
    </div>
  );
};

export default MovieDetails;
