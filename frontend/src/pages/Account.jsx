import React, { useState, useEffect } from "react";
import API from "../api";

const Account = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/auth/user")
      .then((res) => {
        setUser(res.data);
        setName(res.data.name);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleUpdate = async () => {
    try {
      await API.put("/auth/user/update", { name, password });
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage("Error updating profile.");
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="account-container">
      <h2>Account Details</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Plan:</strong> {user.plan || "No plan selected"}</p>

      <div className="account-form">
        <label>Update Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Update Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleUpdate}>Save Changes</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Account;
