import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import MapSubmissionSection from './components/MapSubmissionSection';
import VotingSection from './components/VotingSection';
import VerificationSection from './components/VerificationSection';
import Footer from './components/Footer';
import type { Track, MapSubmission, VerificationData } from './types/index';
import './App.css';

const App: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([
    {
      id: '1',
      name: 'Neon City Circuit',
      creator: 'RacerX',
      submittedDate: '2 days ago',
      votes: 42
    },
    {
      id: '2',
      name: 'Mountain Pass Extreme',
      creator: 'SkyPilot',
      submittedDate: '5 days ago',
      votes: 38
    },
    {
      id: '3',
      name: 'Industrial Complex',
      creator: 'TechDrone',
      submittedDate: '1 week ago',
      votes: 29
    },
    {
      id: '4',
      name: 'Sunset Beach Run',
      creator: 'CoastalFlyer',
      submittedDate: '1 week ago',
      votes: 25
    }
  ]);

  const [mapForm, setMapForm] = useState<MapSubmission>({
    mapName: '',
    workshopUrl: '',
    description: '',
    creator: ''
  });

  const [verificationForm, setVerificationForm] = useState<VerificationData>({
    discordUsername: '',
    steamProfileUrl: ''
  });

  const handleVote = (trackId: string, direction: number) => {
    setTracks(prevTracks =>
      prevTracks.map(track =>
        track.id === trackId
          ? { ...track, votes: track.votes + direction }
          : track
      )
    );
  };

  const handleMapSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Map submitted:', mapForm);
    alert('Map submitted successfully! (Connect to your backend)');
    setMapForm({
      mapName: '',
      workshopUrl: '',
      description: '',
      creator: ''
    });
  };

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Verification requested:', verificationForm);
    alert('Verification request sent! (Connect to your backend)');
    setVerificationForm({
      discordUsername: '',
      steamProfileUrl: ''
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app">
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>

      <div className="container">
        <Header scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <Features />
        <MapSubmissionSection
          mapForm={mapForm}
          setMapForm={setMapForm}
          handleSubmit={handleMapSubmit}
        />
        <VotingSection tracks={tracks} handleVote={handleVote} />
        <VerificationSection
          verificationForm={verificationForm}
          setVerificationForm={setVerificationForm}
          handleSubmit={handleVerificationSubmit}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;