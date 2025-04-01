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
        
        const successUrl = `https://67ebdf3dc79d2b0008ec302c--aesthetic-begonia-ee0c7e.netlify.app/success?userId=${userId}&plan=${plan}`;

       
        await axios.post('http://localhost:5000/api/stripe/payment-success', { userId, plan });

        setTimeout(() => {
          window.location.href = successUrl; 
        }, 3000); 
      } catch (error) {
        alert('Error confirming payment');
      }
    };

    confirmPayment();
  }, [navigate, userId, plan]);

  return <h1>Payment Successful! Redirecting to Home...</h1>;
}
