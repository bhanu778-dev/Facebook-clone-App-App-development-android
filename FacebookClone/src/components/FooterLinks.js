import React from 'react';
import './FooterLinks.css';

const FooterLinks = () => {
  const footerLinks = [
    ['Sign Up', 'Log In', 'Messenger', 'Facebook Lite', 'Video', 'Meta Pay', 'Meta Store', 'Meta Quest', 'Ray-Ban Meta', 'Meta AI', 'Instagram', 'Threads', 'Voting Information Center'],
    ['Privacy Policy', 'Consumer Health Privacy', 'Privacy Center', 'About', 'Create ad', 'Create Page', 'Developers', 'Careers', 'Cookies', 'Ad choices', 'Terms', 'Help', 'Contact Uploading & Non-Users', 'Settings', 'Activity log']
  ];

  return (
    <div className="footer-links">
      <div className="footer-section">
        {footerLinks[0].map((link, index) => (
          <a key={index} href="#" className="footer-link">
            {link}
          </a>
        ))}
      </div>
      
      <div className="footer-section">
        {footerLinks[1].map((link, index) => (
          <a key={index} href="#" className="footer-link">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
