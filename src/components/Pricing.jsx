import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <p className="pricing-subtitle">Choisissez le plan adapté à l'étape de votre startup.</p>
        
        <motion.div 
          className="pricing-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Starter Plan */}
          <motion.div className="pricing-card" variants={cardVariants}>
            <div className="card-header">
              <h3 className="card-title">Starter</h3>
              <p className="card-desc">Pour les jeunes pousses</p>
            </div>
            <div className="card-price">
              29€<span>/mois</span>
            </div>
            <ul className="card-features">
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Jusqu'à 5 utilisateurs</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Tableau de bord basique</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Facturation simplifiée</li>
            </ul>
            <button className="btn btn-secondary">Choisir Starter</button>
          </motion.div>

          {/* Growth Plan */}
          <motion.div className="pricing-card highlight" variants={cardVariants}>
            <div className="card-header">
              <h3 className="card-title">Growth</h3>
              <p className="card-desc">Pour accélérer</p>
            </div>
            <div className="card-price">
              99€<span>/mois</span>
            </div>
            <ul className="card-features">
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Utilisateurs illimités</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Outils RH avancés</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Analyses de croissance</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Support prioritaire</li>
            </ul>
            <button className="btn btn-primary">Choisir Growth</button>
          </motion.div>

          {/* Scale Plan */}
          <motion.div className="pricing-card" variants={cardVariants}>
            <div className="card-header">
              <h3 className="card-title">Scale</h3>
              <p className="card-desc">Pour les entreprises établies</p>
            </div>
            <div className="card-price-custom">
              Sur mesure
            </div>
            <ul className="card-features">
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Fonctionnalités personnalisées</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Intégrations API dédiées</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Account manager dédié</li>
            </ul>
            <button className="btn btn-secondary">Contacter les ventes</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
