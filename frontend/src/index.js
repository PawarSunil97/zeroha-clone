import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing__page/home/HomePage';
import SignUp from './landing__page/singUp/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from './landing__page/about/AboutPage';
import ProductPage from './landing__page/products/ProductPage';
import PricingPage from './landing__page/pricing/PricingPage';
import SupportPage from './landing__page/support/SupportPage';
import NavBar from './landing__page/Navbar';
import { Footer } from './landing__page/Footer';
import NotPageFaound from './landing__page/NotPageFaound';

// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotPageFaound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
);


