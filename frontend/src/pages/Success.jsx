import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Success() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const plan = searchParams.get('plan');
  const navigate = useNavigate();

  useEffect(() => {
    const confirmPayment = async () => {
      try {
        // Determine the correct success URL based on the environment
        const successUrl =
          process.env.NODE_ENV === 'production'
            ? `https://67ebdf3dc79d2b0008ec302c--aesthetic-begonia-ee0c7e.netlify.app/success?userId=${userId}&plan=${plan}`
            : `http://localhost:3000/success?userId=${userId}&plan=${plan}`;

        // Call the backend API to confirm payment
        await axios.post('http://localhost:5000/api/stripe/payment-success', { userId, plan });

        // Redirect after 3 seconds
        setTimeout(() => {
          window.location.href = successUrl; // Redirect to correct success URL
        }, 3000); // Wait 3 seconds before redirect
      } catch (error) {
        alert('Error confirming payment');
      }
    };

    confirmPayment();
  }, [navigate, userId, plan]);

  return <h1>Payment Successful! Redirecting...</h1>;
}
