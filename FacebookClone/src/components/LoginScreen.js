import React, { useState } from 'react';
import LoginForm from './LoginForm';
import LanguageSelector from './LanguageSelector';
import FooterLinks from './FooterLinks';
import './LoginScreen.css';

const LoginScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English (US)');

  return (
    <div className="login-screen">
      <div className="login-container">
        <div className="login-content">
          {/* Facebook Logo and Tagline */}
          <div className="facebook-branding">
            <img 
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" 
              alt="Facebook" 
              className="facebook-logo"
            />
            <h2 className="tagline">
              Connect with friends and the world around you on Facebook.
            </h2>
          </div>

          {/* Login Form */}
          <LoginForm />
        </div>

        {/* Language Selector */}
        <LanguageSelector 
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />

        {/* Footer Links */}
        <FooterLinks />

        {/* Copyright */}
        <div className="copyright">
          Meta © 2025
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
