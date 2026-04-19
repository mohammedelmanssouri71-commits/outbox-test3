import React from 'react';
import Slider from './Slider';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Gérez toute votre startup depuis un seul tableau de bord
      </motion.h1>
      <p>
        NextPath centralise vos finances, votre équipe et votre croissance. Fini les 
        allers-retours et des dizaines d'outils, des décisions éclairées, plus rapidement.
      </p>
      
      <button className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '16px' }}>
        Commencer gratuitement
      </button>

      <motion.div 
        className="hero-dashboard"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        <Slider />
      </motion.div>

      <div className="hero-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
}