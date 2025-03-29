import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const handlePayment = async (selectedAmount) => {
    try {
      const response = await fetch("http://localhost:5000/api/payment/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: selectedAmount }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe payment
      } else {
        alert("Payment failed. Try again!");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Plan 1 */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold">Basic Plan</h2>
          <p className="text-lg my-2">₹199/month</p>
          <button
            onClick={() => handlePayment(19900)}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Subscribe - ₹199
          </button>
        </div>

        {/* Plan 2 */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold">Standard Plan</h2>
          <p className="text-lg my-2">₹499/month</p>
          <button
            onClick={() => handlePayment(49900)}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Subscribe - ₹499
          </button>
        </div>

        {/* Plan 3 */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold">Premium Plan</h2>
          <p className="text-lg my-2">₹799/month</p>
          <button
            onClick={() => handlePayment(79900)}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Subscribe - ₹799
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
