import React from 'react';
import CountUpModule from 'react-countup';

const CountUp = CountUpModule.default || CountUpModule;

export default function Stats() {
  return (
    <section className="stats container">
      <div className="stat-item">
        <h2><CountUp end={2400} enableScrollSpy={true} scrollSpyOnce={true} suffix="+" /></h2>
        <p>Startups nous utilisent</p>
      </div>
      <div className="stat-item">
        <h2><CountUp end={98} enableScrollSpy={true} scrollSpyOnce={true} suffix="%" /></h2>
        <p>Satisfaction client</p>
      </div>
      <div className="stat-item">
        <h2><CountUp end={8} enableScrollSpy={true} scrollSpyOnce={true} suffix="h" /></h2>
        <p>Économisées par semaine</p>
      </div>
    </section>
  );
}