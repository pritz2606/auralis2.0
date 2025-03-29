import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
      <p className="text-lg mt-2">You can now enjoy unlimited streaming.</p>
      <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default PaymentSuccess;
