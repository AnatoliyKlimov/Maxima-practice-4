// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import bellIcon from '../assets/bell_icon.svg';
import cartIcon from '../assets/cart_icon.svg';
import profileIcon from '../assets/profile_icon.svg';
import logo from '../assets/logo.svg';

const Header = () => {
    const { i18n } = useTranslation();
    const [languageDropdown, setLanguageDropdown] = useState(false);
    const [userDropdown, setUserDropdown] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const userRef = useRef(null);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguageDropdown(false);
    };

    const toggleUserDropdown = () => {
        setUserDropdown(!userDropdown);
    };

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUserDropdown(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userRef.current && !userRef.current.contains(event.target)) {
                setUserDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [userRef]);

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <nav className="header-nav">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div className="header-actions">
                    <div className="header-search">
                        <input type="text" placeholder="Search" />
                        <button>🔍</button>
                    </div>

                    <div className="language-toggle" onMouseEnter={() => setLanguageDropdown(true)} onMouseLeave={() => setLanguageDropdown(false)}>
                        <button className="language-button">{i18n.language.toUpperCase()}</button>
                        {languageDropdown && (
                            <div className="language-menu">
                                <button onClick={() => changeLanguage('en')}>EN</button>
                                <button onClick={() => changeLanguage('ru')}>RU</button>
                            </div>
                        )}
                    </div>

                    <div className="header-icons">
                        <button>
                            <img src={bellIcon} alt="Notifications" />
                        </button>
                        <button>
                            <img src={cartIcon} alt="Cart" />
                        </button>
                        <div className="header-profile" ref={userRef}>
                            <button
                                className={isAuthenticated ? 'authenticated' : ''}
                                onClick={toggleUserDropdown}
                            >
                                <img src={profileIcon} alt="Profile" />
                            </button>
                            {userDropdown && isAuthenticated && (
                                <div className="user-menu">
                                    <Link to="/account">Manage My Account</Link>
                                    <Link to="/order">My Order</Link>
                                    <Link to="/cancellations">My Cancellations</Link>
                                    <Link to="/reviews">My Reviews</Link>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;