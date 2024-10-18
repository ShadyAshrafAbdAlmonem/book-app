import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./firstComponentStyle.css";

export default function FirstComponent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const complexPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    const englishOnly = /^[A-Za-z0-9@._ ]*$/; 

    if (!englishOnly.test(value)) {
      setError("Please use English letters only.");
      return;
    } else {
      setError("");
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "password" && !complexPasswordRegex.test(value)) {
      setError("Password must contain at least one uppercase, one lowercase, one number, and one special character.");
    } else if (name === "password") {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.trim() !== formData.confirmPassword.trim()) {
      setError("Passwords do not match");
    } else if (!complexPasswordRegex.test(formData.password)) {
      setError("Password is not complex enough");
    } else {
      setError("");
      console.log("Form Submitted:", formData);
      alert("New email created successfully!");
      navigate("/login");
    }
  };

  return (
    <div className="form-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>

        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Create New Email</button>
      </form>

      <p>You Have Already Account </p>
      <button onClick={() => navigate("/login")}>Log In</button>
    </div>
  );
}
