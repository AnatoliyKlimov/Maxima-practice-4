import React from 'react';
import './Footer.css';
import googlePlayBadge from '../../assets/google-play-badge.png';
import appStoreBadge from '../../assets/app-store-badge.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Exclusive</h4>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div className="subscribe-container">
                    <input type="email" placeholder="Enter your email" />
                    <button>&#10148;</button>
                </div>
            </div>
            <div className="footer-section">
                <h4>Support</h4>
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className="footer-section">
                <h4>Account</h4>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>
            <div className="footer-section">
                <h4>Quick Link</h4>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            <div className="footer-section">
                <h4>Download App</h4>
                <p>Save $3 with App New User Only</p>
                <div className="app-badges">
                    <img src={googlePlayBadge} alt="Get it on Google Play" />
                    <img src={appStoreBadge} alt="Download on the App Store" />
                </div>
                <div className="social-icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; Copyright Rimel 2022. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
