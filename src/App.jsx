import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Pricing from './components/Pricing';
import { CTA, Footer } from './components/CTAFooter';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <div className="theme-dark">
        <Navbar />
        <Hero />
      </div>
      <Stats />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}