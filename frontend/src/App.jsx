import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Plans from './pages/Plans';
import Success from './pages/Success';
import Account from './pages/Account'; // Import Account Page
import API from './api'; // Import API for user fetching

// Protected Route Component
const ProtectedRoute = ({ children, user }) => {
  const token = localStorage.getItem('token');
  return token ? React.cloneElement(children, { user }) : <Navigate to="/" />;
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get('/auth/user'); // Get user data
        setUser(res.data);
      } catch (error) {
        console.log('Error fetching user:', error);
        localStorage.removeItem('token'); // If error, remove invalid token
      }
    };

    if (localStorage.getItem('token')) {
      fetchUser();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    setUser(null); // Reset user state
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/success" element={<Success />} />

        {/* Protected Routes */}
        <Route 
          path="/home" 
          element={
            <ProtectedRoute user={user}>
              <Home user={user} onLogout={handleLogout} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/movie/:id" 
          element={
            <ProtectedRoute user={user}>
              <MovieDetails user={user} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/account" 
          element={
            <ProtectedRoute user={user}>
              <Account user={user} setUser={setUser} />
            </ProtectedRoute>
          } 
        />

        {/* Redirect to Home if no routes match */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
