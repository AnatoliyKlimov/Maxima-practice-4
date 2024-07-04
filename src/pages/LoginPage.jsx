// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import shoppingCart from '../assets/shopping_cart.png';
import googleIcon from '../assets/google_icon.svg';

const LoginPage = () => {
    const [name, setName] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerUser({ name, emailOrPhone, password }));
        navigate('/login-form');
    };

    return (
        <div className="login-page">
            <div className="left-section">
                <img src={shoppingCart} alt="Shopping Cart" className="shopping-cart-img" />
            </div>
            <div className="right-section">
                <h2>Create Account</h2>
                <form onSubmit={handleRegister} className="login-form">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                    />
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
                    <button type="submit" className="create-account-btn">Create Account</button>
                </form>
                <button className="google-login-btn">
                    <img src={googleIcon} alt="Google" />
                    Login with Google
                </button>
                <p className="login-text">Already have an account? <Link to="/login-form">Log In</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;