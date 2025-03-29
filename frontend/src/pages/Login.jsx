import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", user);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/home";
    } catch (err) {
      if (err.response.status === 402) {
        const { data } = await axios.post("http://localhost:5000/api/payment/create-checkout-session", { userId: user.email });
        window.location.href = data.url;
      }
    }
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={e => setUser({ ...user, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
      <p className="mt-4">
  Don't have an account?{" "}
  <a href="/register" className="text-blue-500">
    Register here
  </a>
</p>
    </div>
  );
}
