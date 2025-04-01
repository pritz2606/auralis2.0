import React, { useState } from "react";
import API from "../api";

const Account = ({ user, setUser }) => {
  const [name, setName] = useState(user?.name || "");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle Name Update
  const handleUpdateName = async () => {
    try {
      await API.put("/auth/update-name", { name });
      setUser({ ...user, name });
      setMessage("Name updated successfully!");
    } catch (error) {
      setMessage(error.response?.data?.error || "Error updating name");
    }
  };

  // Handle Password Change
  const handleChangePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      return setMessage("New passwords do not match");
    }

    try {
      await API.put("/auth/change-password", { oldPassword, newPassword, confirmNewPassword });
      setMessage("Password updated successfully!");
      setOldPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (error) {
      setMessage(error.response?.data?.error || "Error changing password");
    }
  };

  return (
    <div className="account">
      <h2>Account Settings</h2>

      {message && <p className="message">{message}</p>}

      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleUpdateName}>Update Name</button>
      </div>

      <div>
        <label>Email:</label>
        <input type="text" value={user?.email} disabled />
      </div>

      <div>
        <label>Current Plan:</label>
        <input type="text" value={user?.plan || "No Plan"} disabled />
      </div>

      <h3>Change Password</h3>
      <div>
        <label>Old Password:</label>
        <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
      </div>
      <div>
        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </div>
      <div>
        <label>Confirm New Password:</label>
        <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
      </div>
      <button onClick={handleChangePassword}>Update Password</button>
    </div>
  );
};

export default Account;
