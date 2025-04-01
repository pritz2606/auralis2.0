import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, width = '200px', height = '400px' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to the movie details page with movie data
    navigate(`/movie/${movie._id}`, { state: movie });
  };

  return (
    <div className="movie-card" style={{ 
      cursor: 'pointer', 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '15px', 
      margin: '25px', 
      textAlign: 'center', 
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
      transition: 'transform 0.3s, box-shadow 0.3s', 
      width: width, 
      height: height,
      backgroundColor: '#f9f9f9'
    }}>
      <img src={movie.imageUrl} alt={movie.title} style={{ 
        width: '100%', 
        height: 'auto', 
        borderRadius: '8px' 
      }} />
      <h2 style={{ fontSize: '1.5em', color: '#333', margin: '10px 0' }}>{movie.title}</h2>
      <button style={{ 
        padding: '10px 15px', 
        border: 'none', 
        borderRadius: '5px', 
        backgroundColor: '#646cff', 
        color: '#fff', 
        cursor: 'pointer', 
        marginTop: '10px' 
      }} onClick={handleClick}>
        Details
      </button>
    </div>
  );
};

export default MovieCard;