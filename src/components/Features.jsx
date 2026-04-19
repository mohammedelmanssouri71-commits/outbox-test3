import React from 'react';
import { motion } from 'framer-motion';

const FEATURE_DATA = [
  {
    id: 1,
    title: 'Tableau de bord',
    description: 'Une vue d\'ensemble claire et personnalisable de tous vos indicateurs clés. Surveillez la santé de startup map en un coup d\'œil.',
    buttonText: 'Un Tableau de bord',
    imgSrc: '/assets/dashboard_dark_1776636759413.png',
    reverse: false
  },
  {
    id: 2,
    title: 'Finances',
    description: 'Gérez votre trésorerie, automatisez vos factures et suivez vos dépenses. Des rapports financiers précis à portée de clic.',
    buttonText: 'Expand Finances',
    imgSrc: '/assets/dashboard_finances_dark_1776636772991.png',
    reverse: true
  },
  {
    id: 3,
    title: 'Équipe & RH',
    description: 'Simplifiez l\'onboarding, gérez les congés et centralisez les documents de vos employés dans un espace sécurisé.',
    buttonText: 'Contact Équipe & RH',
    imgSrc: '/assets/dashboard_hr_light_1776636983916.png',
    reverse: false
  },
  {
    id: 4,
    title: 'Croissance',
    description: 'Analysez vos économies d\'acquisition, suivez vos KPIs de croissance et optimisez votre stratégie avec vos outils d\'analyse.',
    buttonText: 'Contacter Croissance',
    imgSrc: '/assets/dashboard_growth_light_1776637076877.png',
    reverse: true
  }
];

export default function Features() {
  return (
    <div className="features-wrapper">
      <section className="features container">
      {FEATURE_DATA.map((feature) => (
        <motion.div 
          key={feature.id} 
          className={`feature-section ${feature.reverse ? 'reverse' : ''}`}
          initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="feature-content">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
            <button className="btn btn-primary">{feature.buttonText}</button>
          </div>
          <div className="feature-image">
            <img src={feature.imgSrc} alt={feature.title} />
          </div>
        </motion.div>
      ))}
      </section>
    </div>
  );
}
