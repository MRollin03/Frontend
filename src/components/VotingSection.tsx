import React from 'react';
import TrackItem from './TrackItem';
import type { Track } from '../types';

interface VotingSectionProps {
  tracks: Track[];
  handleVote: (trackId: string, direction: number) => void;
}

const VotingSection: React.FC<VotingSectionProps> = ({ tracks, handleVote }) => {
  return (
    <section className="voting-section" id="vote">
      <h2 className="section-title">Vote for Tracks</h2>
      <div className="track-list">
        {tracks.map(track => (
          <TrackItem key={track.id} track={track} handleVote={handleVote} />
        ))}
      </div>
    </section>
  );
};

export default VotingSection;