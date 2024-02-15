import React from 'react';
import './footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <a href="/" className="footer-link">Home</a>
        <a href="/terms" className="footer-link">Terms and conditions</a>
        <a href="/privacy" className="footer-link">Privacy policy</a>
        <a href="/collection" className="footer-link">Collection statement</a>
        <a href="/help" className="footer-link">Help</a>
        <a href="/manage" className="footer-link">Manage account</a>
        <p className="text-sm text-neutral-300">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </p>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
        <div className="download-buttons">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src="https://protostargames.com/wp/wp-content/uploads/getItOnGooglePlay.png" alt="Download on Android" />
          </a>
          <a href="https://www.apple.com/app-store" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/768px-Download_on_the_App_Store_RGB_blk.svg.png" alt="Download on Apple" />
          </a>
          <a href="https://www.microsoft.com/store/apps" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/1200px-Get_it_from_Microsoft_Badge.svg.png" alt="Download on Microsoft" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;