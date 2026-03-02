import React from 'react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="hero">
      <h1>
        <span>Power Your Racing</span>
        <br />
        Community Maps
      </h1>
      <p>
        Submit custom tracks, vote for your favorites, and get verified to unlock exclusive
        features in our Liftoff lobby hosting bot.
      </p>
      <button className="cta-button" onClick={() => scrollToSection('submit')}>
        Submit Your Map
      </button>
    </section>
  );
};

export default Hero;