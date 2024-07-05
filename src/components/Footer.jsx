// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Create a CSS file for styling
import facebookIcon from '../assets/facebook.png'; // Example of importing an icon
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';
import googlePlayBadge from '../assets/google-play-badge.png';
import appStoreBadge from '../assets/app-store-badge.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Exclusive</h3>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <input type="email" placeholder="Enter your email" />
                <button type="button">→</button>
            </div>
            <div className="footer-section">
                <h3>Support</h3>
                <address>
                    111 Bijoy sarani, Dhaka, DH 1515, Bangladesh
                </address>
                <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
                <p>+88015-88888-9999</p>
            </div>
            <div className="footer-section">
                <h3>Account</h3>
                <nav>
                    <Link to="/myaccount">My Account</Link>
                    <Link to="/login">Login / Register</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/shop">Shop</Link>
                </nav>
            </div>
            <div className="footer-section">
                <h3>Quick Link</h3>
                <nav>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-of-use">Terms Of Use</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
            <div className="footer-section">
                <h3>Download App</h3>
                <p>Save $3 with App New User Only</p>
                <div className="download-links">
                    <img src={googlePlayBadge} alt="Get it on Google Play" />
                    <img src={appStoreBadge} alt="Download on the App Store" />
                </div>
                <div className="social-icons">
                    <img src={facebookIcon} alt="Facebook" />
                    <img src={twitterIcon} alt="Twitter" />
                    <img src={instagramIcon} alt="Instagram" />
                    <img src={linkedinIcon} alt="LinkedIn" />
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Copyright Rimel 2022. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
