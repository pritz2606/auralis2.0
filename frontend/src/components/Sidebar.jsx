import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Sidebar = ({ user, onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <FaTimes size={30} onClick={onClose} />
      <h2>{user?.name}'s Profile</h2>
      <ul>
      <li>
          <Link to="/account">Account Settings</Link> {/* Link to Account Page */}
        </li>
        <li>Subscription Plan</li>
        <li onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
