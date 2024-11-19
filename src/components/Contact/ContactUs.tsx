import React from 'react';
import './ContactUs.css';

const ContactUs: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-title">Contact Us</div>
        <div className="contact-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img className="contact-icon" src='/images/FacebookLogo.png' alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon" style={{ left: '81.42px' }}>
              <img src='/images/LinkedInLogo.png' alt="LinkedIn" />
              <div style={{ width: '40.92px', height: '40.92px', color: '#006699' }} />
            </div>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img className="contact-icon" style={{ left: '162px' }} src='/images/InstergramLogo.png' alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img className="contact-icon" style={{ left: '243px' }} src='/images/TikTokDarkLogo.png' alt="TikTok" />
          </a>
        </div>
        <div className="contact-info">
          <div className="whatsapp-info">
            <a href="https://api.whatsapp.com/send?phone=94712345678" target="_blank" rel="noopener noreferrer">
              <img style={{ width: '72px', height: '72px' }} src='/images/whatsAppLogo.png' alt="WhatsApp" />
            </a>
            <div className="whatsapp-number">071 234 5678</div>
          </div>
          <div className="divider" />
          <div className="phone-info">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img style={{ width: '72px', height: '72px' }} src='/images/phoneLogo.png' alt="Phone" />
            </a>
            <div className="phone-number">071 234 5678</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;