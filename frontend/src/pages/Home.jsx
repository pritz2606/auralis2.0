// Home.jsx
import React, { useEffect, useState } from 'react';
import API from '../api';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  // Fetching user and movie data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await API.get('/auth/user');
        setUser(res.data); // Set user data
      } catch (err) {
        console.error(err);
        navigate('/login'); // Redirect to login if user is not authenticated
      }
    };

    const fetchMovies = async () => {
      try {
        const res = await API.get('/movies');
        setMovies(res.data); // Set movie data
      } catch (err) {
        console.error(err); // Handle error
      }
    };

    fetchUserData();
    fetchMovies();
  }, [navigate]);

  return (
    <div>
      {/* Header component will display user's name */}
      <Header user={user} />
      <div>
        {/* Display welcome message */}
        <h2>Welcome to AURALIS, {user?.name}!</h2>

        {/* Movie listing */}
        <div className="movie-list">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie._id}
                className="movie-card"
                onClick={() => navigate(`/movie/${movie._id}`)} // Navigate to movie details on click
              >
                <img src={movie.image} alt={movie.title} />
                <h3>{movie.title}</h3>
              </div>
            ))
          ) : (
            <p>No movies available at the moment</p> // Message if no movies
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
