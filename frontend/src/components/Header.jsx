import React, { useState } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';

const Header = ({ user }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear auth token
    window.location.href = "/"; // Redirect to login
  };

  return (
    <header className="header">
      <h1>AURALIS</h1>
      <div className="header-right">
        <span>Welcome, {user?.name}</span>
        <FaUserCircle size={30} />
        <FaBars size={30} onClick={() => setIsSidebarOpen(true)} />
      </div>
      {isSidebarOpen && <Sidebar user={user} onClose={() => setIsSidebarOpen(false)} onLogout={handleLogout} />}
    </header>
  );
};

export default Header;
