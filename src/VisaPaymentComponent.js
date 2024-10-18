import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './VisaPaymentComponent.css';

export default function VisaPaymentComponent() {
  const location = useLocation();
  const navigate = useNavigate(); // For navigation after form submission
  const { book } = location.state; // Get book details

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showDialog, setShowDialog] = useState(false); // State for dialog

  // Check form validity on every input change
  const checkFormValidity = () => {
    if (cardNumber && expiryDate && cvv) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  // Handle submit and show dialog
  const handleSubmit = () => {
    console.log(`Paying for ${book.name} using Visa card: ${cardNumber}`);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
    setShowDialog(true); // Show dialog message
  };

  // Navigate to the home page after closing the dialog
  const handleDialogClose = () => {
    setShowDialog(false);
    navigate("/home"); // Redirect to home page
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h1 className="payment-title">Visa Payment for: {book.name}</h1>
        <p className="payment-price">Price: ${book.price}</p>

        <div className="payment-form">
          <h3>Enter Visa Card Details</h3>

          <label>
            <span>Card Number:</span>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => {
                setCardNumber(e.target.value);
                checkFormValidity();
              }}
              placeholder="Enter card number"
              className="input-field"
            />
          </label>

          <label>
            <span>Expiry Date:</span>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => {
                setExpiryDate(e.target.value);
                checkFormValidity();
              }}
              placeholder="MM/YY"
              className="input-field"
            />
          </label>

          <label>
            <span>CVV:</span>
            <input
              type="text"
              value={cvv}
              onChange={(e) => {
                setCvv(e.target.value);
                checkFormValidity();
              }}
              placeholder="CVV"
              className="input-field"
            />
          </label>

          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={!isFormValid} // Disable button if form is invalid
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
