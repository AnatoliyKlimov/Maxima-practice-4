// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import bellIcon from '../assets/bell_icon.svg'; // Иконки помещаем в assets
import cartIcon from '../assets/cart_icon.svg';
import profileIcon from '../assets/profile_icon.svg';
import searchIcon from '../assets/search_icon.svg'
import logo from '../assets/logo.svg'; // Логотип

const Header = () => {
    const { i18n } = useTranslation();
    const [languageDropdown, setLanguageDropdown] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguageDropdown(false);
    }

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
                            <img src={searchIcon} alt="SearchIcon" />
                        </button>
                    </div>

                    {/* Language Toggle Dropdown */}
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
                        <button>
                            <img src={profileIcon} alt="Profile" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;