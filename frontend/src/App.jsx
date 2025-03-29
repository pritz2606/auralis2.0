import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PaymentSuccess from "./pages/PaymentSuccess";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment" element={<Payment />} />
        
      </Routes>
    </Router>
  );
}

export default App;
