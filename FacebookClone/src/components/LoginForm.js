import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    let hasError = false;
    
    if (!email) {
      setEmailError('Email or phone number is required');
      hasError = true;
    }
    
    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    }
    
    if (!hasError) {
      // Handle login logic here
      console.log('Login attempt:', { email, password });
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form-card">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Email or phone number"
              value={email}
              onChange={handleEmailChange}
              className={`login-input ${emailError ? 'error' : ''}`}
            />
            {emailError && <div className="error-message">{emailError}</div>}
          </div>
          
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className={`login-input ${passwordError ? 'error' : ''}`}
            />
            {passwordError && <div className="error-message">{passwordError}</div>}
          </div>
          
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        
        <a href="#" className="forgot-password">
          Forgot password?
        </a>
        
        <div className="divider"></div>
        
        <button className="create-account-button">
          Create new account
        </button>
      </div>
      
      <p className="create-page-text">
        <a href="#" className="create-page-link">Create a Page</a> for a celebrity, brand or business.
      </p>
    </div>
  );
};

export default LoginForm;
