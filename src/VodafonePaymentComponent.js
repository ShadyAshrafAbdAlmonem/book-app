import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './VodafonePaymentComponent.css';

export default function VodafonePaymentComponent() {
  const location = useLocation();
  const navigate = useNavigate(); // For navigation after submission
  const { book } = location.state; // Get book details

  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [isFormValid, setIsFormValid] = useState(false); // Form validation
  const [showDialog, setShowDialog] = useState(false); // Dialog state

  // Validate form fields
  const checkFormValidity = () => {
    if (phoneNumber && amount) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log(`Paying for ${book.name} via Vodafone Cash: ${phoneNumber}`);
    console.log("Amount:", amount);
    setShowDialog(true); // Show dialog on submit
  };

  // Close dialog and navigate to home
  const handleDialogClose = () => {
    setShowDialog(false);
    navigate("/home"); // Redirect to home page
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h1 className="payment-title">Vodafone Cash Payment for: {book.name}</h1>
        <p className="payment-price">Price: ${book.price}</p>

        <div className="payment-form">
          <h3>Enter Vodafone Cash Details</h3>

          <label>
            <span>Phone Number:</span>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                checkFormValidity();
              }}
              placeholder="Enter your Vodafone Cash number"
              className="input-field"
            />
          </label>

          <label>
            <span>Amount:</span>
            <input
              type="text"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                checkFormValidity();
              }}
              placeholder="Amount to pay"
              className="input-field"
            />
          </label>

          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={!isFormValid} // Disable if form is invalid
          >
            Submit Payment
          </button>
        </div>
      </div>

      {/* Dialog */}
      {showDialog && (
        <div className="dialog">
          <div className="dialog-content">
            <h2>Thank you!</h2>
            <p>Your payment for {book.name} was successful.</p>
            <button className="close-btn" onClick={handleDialogClose}>
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
