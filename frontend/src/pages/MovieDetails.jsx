import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details based on the movie ID
    axios.get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.error("Error fetching movie details:", err));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>

      <div className="buttons">
        <button onClick={() => alert("Play the movie")}>Play</button>
        <button onClick={() => window.open(movie.trailerUrl, "_blank")}>Watch Trailer</button>
      </div>

      <div className="movie-video">
        {movie.trailerUrl && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movie.trailerUrl}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
