// src/pages/LoginPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import shoppingCart from '../assets/shopping_cart.png';
import googleIcon from '../assets/google_icon.svg';

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="left-section">
                <img src={shoppingCart} alt="Shopping Cart" className="shopping-cart-img" />
            </div>
            <div className="right-section">
                <h2>Create Account</h2>
                <form className="login-form">
                    <input type="text" placeholder="Name" className="form-input" />
                    <input type="text" placeholder="Email or Phone Number" className="form-input" />
                    <input type="password" placeholder="Password" className="form-input" />
                    <button type="submit" className="create-account-btn">Create Account</button>
                </form>
                <button className="google-login-btn">
                    <img src={googleIcon} alt="Google" />
                    Login with Google
                </button>
                <p className="login-text">Already have an account? <Link to="/login">Log In</Link></p>
            </div>
        </div>
    );
}

export default LoginPage;