import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './buyComponent.css'

export default function BuyComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state; 

  const handlePayment = (paymentMethod) => {
    console.log(`Purchasing ${book.name} via ${paymentMethod}`);

    if (paymentMethod === "Visa") {
      navigate("/visa-payment", { state: { book } });
    } else if (paymentMethod === "MasterCard") {
      navigate("/mastercard-payment", { state: { book } }); 
    } else if (paymentMethod === "Vodafone Cash") {
      navigate("/vodafone-payment", { state: { book } }); 
    }
  };

  return (
<div className="buy-container">
      <div className="buy-card">
        <h1 className="book-title">Purchase: {book.name}</h1>
        <p className="book-price">Price: ${book.price}</p>

        <div className="payment-methods">
          <h3>Select Payment Method</h3>
          <div className="payment-buttons">
            <button
              className="payment-btn visa"
              onClick={() => handlePayment("Visa")}
            >
              Pay with Visa
            </button>
            <button
              className="payment-btn mastercard"
              onClick={() => handlePayment("MasterCard")}
            >
              Pay with MasterCard
            </button>
            <button
              className="payment-btn vodafone"
              onClick={() => handlePayment("Vodafone Cash")}
            >
              Pay with Vodafone Cash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
