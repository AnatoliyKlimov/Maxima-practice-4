// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/authSlice';
import './Header.css';
import bellIcon from '../assets/bell_icon.svg';
import cartIcon from '../assets/cart_icon.svg';
import userIcon from '../assets/user.svg';
import searchIcon from '../assets/search_icon.svg';
import logo from '../assets/logo.svg';

const Header = () => {
    const { i18n } = useTranslation();
    const [userDropdown, setUserDropdown] = useState(false);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const userRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleUserDropdown = () => {
        if (isAuthenticated) {
            setUserDropdown(!userDropdown);
        } else {
            navigate('/login'); // Перенаправлять на страницу регистрации
        }
    };

    const handleLogout = () => {
        dispatch(logoutUser());
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
                        <button>
                            <img src={searchIcon} alt="searchIcon"/>
                        </button>
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
                                <img src={userIcon} alt="Profile" className="user-icon" />
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