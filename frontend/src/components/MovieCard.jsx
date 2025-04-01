import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, width = '200px', height = '300px' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to the movie details page with movie data
    navigate(`/movie/${movie._id}`, { state: movie });
  };

  return (
    <div className="movie-card" style={{ cursor: 'pointer', border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', transition: 'transform 0.3s, box-shadow 0.3s', width: width, height: height }}>
      <img src={movie.imageUrl} alt={movie.title} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
      <h2 style={{ fontSize: '1.5em', color: '#333' }}>{movie.title}</h2>
      <p style={{ color: '#777' }}>{movie.genre}</p>
      <p style={{ color: '#555', fontStyle: 'italic' }}>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
      <p style={{ color: '#555' }}>Rating: {movie.rating ? movie.rating : 'N/A'}</p>
      <button style={{ padding: '10px 15px', border: 'none', borderRadius: '5px', backgroundColor: '#646cff', color: '#fff', cursor: 'pointer', marginTop: '10px' }} onClick={handleClick}>
        Details
      </button>
    </div>
  );
};

export default MovieCard;