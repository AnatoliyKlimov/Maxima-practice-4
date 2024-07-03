import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/search-icon.svg';
import favoritesIcon from '../../assets/favorites-icon.svg';
import cartIcon from '../../assets/cart-icon.svg';
import './Header.css'; // Подключение стилей для хедера

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="search-container">
                <div className="search-input-container">
                    <img src={searchIcon} alt="Search" className="search-icon" />
                    <input type="text" placeholder="What are you looking for?" className="search-input" />
                </div>
                <button className="icon-button">
                    <img src={favoritesIcon} alt="Favorites" className="icon" />
                </button>
                <button className="icon-button">
                    <img src={cartIcon} alt="Cart" className="icon" />
                </button>
            </div>
        </header>
    );
};

export default Header;
