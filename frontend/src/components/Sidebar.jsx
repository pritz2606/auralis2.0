import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ user, onClose }) => {
  return (
    <div className="sidebar">
      <FaTimes size={30} onClick={onClose} />
      <h2>{user?.name}'s Profile</h2>
      <ul>
        <li>Account Settings</li>
        <li>Subscription Plan</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
