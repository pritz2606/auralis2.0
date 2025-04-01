import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Plans() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const handlePlanSelection = async (plan) => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/stripe/create-checkout-session', { userId, plan });
      window.location.href = data.url;
    } catch (error) {
      alert('Error creating checkout session');
    }
  };

  return (
    <div>
      <h1>Select Your Plan</h1>
      <div>
        <button onClick={() => handlePlanSelection('basic')}>Basic Plan - ₹199</button>
        <button onClick={() => handlePlanSelection('premium')}>Premium Plan - ₹499</button>
      </div>
    </div>
  );
}
