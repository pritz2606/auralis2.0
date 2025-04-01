import React, { useState } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';

const Header = ({ user }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="header">
      <h1>AURALIS</h1>
      <div className="header-right">
        <span>Welcome, {user?.name}</span>
        <FaUserCircle size={30} />
        <FaBars size={30} onClick={() => setIsSidebarOpen(true)} />
      </div>
      {isSidebarOpen && <Sidebar user={user} onClose={() => setIsSidebarOpen(false)} />}
    </header>
  );
};

export default Header;
