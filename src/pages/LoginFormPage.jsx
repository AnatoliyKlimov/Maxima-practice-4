// src/pages/LoginFormPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginFormPage.css';
import shoppingCart from '../assets/shopping_cart.png';

const LoginFormPage = () => {
    return (
        <div className="login-page">
            <div className="left-section">
                <img src={shoppingCart} alt="Shopping Cart" className="shopping-cart-img" />
            </div>
            <div className="right-section">
                <h2>Log In</h2>
                <form className="login-form">
                    <input type="text" placeholder="Email or Phone Number" className="form-input" />
                    <input type="password" placeholder="Password" className="form-input" />
                    <button type="submit" className="login-btn">Log In</button>
                </form>
                <div className="extra-links">
                    <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginFormPage;