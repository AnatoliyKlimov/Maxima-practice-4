// src/pages/LoginFormPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/authSlice';
import { Link } from 'react-router-dom';
import './LoginFormPage.css';
import shoppingCart from '../assets/shopping_cart.png';

const LoginFormPage = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({ emailOrPhone, password }));
    };

    return (
        <div className="login-page">
            <div className="left-section">
                <img src={shoppingCart} alt="Shopping Cart" className="shopping-cart-img" />
            </div>
            <div className="right-section">
                <h2>Log In</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <input
                        type="text"
                        placeholder="Email or Phone Number"
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                        className="form-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                    />
                    <button type="submit" className="login-btn">Log In</button>
                </form>
                <div className="extra-links">
                    <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginFormPage;