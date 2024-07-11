// src/App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import LoginFormPage from './pages/LoginFormPage';
import AccountSidebar from './components/AccountSidebar';

function App() {
    return (
        <Router>
            <div className="App">
                <TopHeader />
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/login-form" element={<LoginFormPage />} />
                    <Route path="/account" element={<AccountSidebar />} />
                    <Route path="/order" element={<AccountSidebar />} />
                    <Route path="/cancellations" element={<AccountSidebar />} />
                    <Route path="/reviews" element={<AccountSidebar />} />
                    <Route path="/logout" element={<AccountSidebar />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
