import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🗺️',
      title: 'Submit Maps',
      description:
        'Share your custom Steam Community Workshop maps with the community. Our bot will integrate approved tracks into the rotation.'
    },
    {
      icon: '🗳️',
      title: 'Vote for Tracks',
      description:
        'Help shape the lobby experience by voting for your favorite community maps. Popular tracks get priority in the rotation.'
    },
    {
      icon: '✓',
      title: 'Get Verified',
      description:
        'Link your account with the bot to unlock voting rights, priority map submissions, and exclusive lobby features.'
    }
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <span className="feature-icon">{feature.icon}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;