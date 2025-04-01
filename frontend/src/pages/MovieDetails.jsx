import React from 'react';
import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state; // Assuming movie details are passed via state

  const handleWatchClick = () => {
    window.open('https://streamable.com/8v6rg0', '_blank');
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh' 
    }}>
      {/* Blurred background */}
      <div style={{ 
        backgroundImage: `url(${movie.imageUrl})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        width: '100%', 
        height: '100%', 
        filter: 'blur(5px)', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        zIndex: 0 
      }}></div>

      {/* Foreground content */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100%', 
        color: 'white', 
        textAlign: 'center', 
        padding: '20px' 
      }}>
        <div style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.7)', 
          borderRadius: '10px', 
          padding: '20px' 
        }}>
          <h1>{movie.title}</h1>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}</p>
          <p><strong>Rating:</strong> {movie.rating ? movie.rating : 'N/A'}</p>
          <button onClick={handleWatchClick} style={{ 
            padding: '10px 15px', 
            border: 'none', 
            borderRadius: '5px', 
            backgroundColor: '#646cff', 
            color: '#fff', 
            cursor: 'pointer' 
          }}>
            Watch
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
