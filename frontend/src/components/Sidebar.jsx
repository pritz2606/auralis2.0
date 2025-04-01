import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ user, onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <FaTimes size={30} onClick={onClose} />
      <h2>{user?.name}'s Profile</h2>
      <ul>
        <li onClick={() => navigate("/account")}>Account Settings</li>
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
