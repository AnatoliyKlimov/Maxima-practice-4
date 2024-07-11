// src/components/TopHeader.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './TopHeader.css';

const TopHeader = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div className="top-header">
            <div className="top-header-content">
                <span>Summertime Sale! Save 25% on select products</span>
                <div className="language-toggle">
                    <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>English</button>
                    <button onClick={() => changeLanguage('ru')} className={i18n.language === 'ru' ? 'active' : ''}>Русский</button>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;