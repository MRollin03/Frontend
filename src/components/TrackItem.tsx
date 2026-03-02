import React, { useState } from 'react';
import type { Track } from '../types';

interface TrackItemProps {
  track: Track;
  handleVote: (trackId: string, direction: number) => void;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, handleVote }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const onVote = (direction: number) => {
    handleVote(track.id, direction);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);
  };

  return (
    <div className="track-item">
      <div className="track-info">
        <h4>{track.name}</h4>
        <p>
          by {track.creator} • Submitted {track.submittedDate}
        </p>
      </div>
      <div className="vote-controls">
        <button className="vote-btn" onClick={() => onVote(-1)}>
          ▼
        </button>
        <div className={`vote-count ${isAnimating ? 'animating' : ''}`}>{track.votes}</div>
        <button className="vote-btn" onClick={() => onVote(1)}>
          ▲
        </button>
      </div>
    </div>
  );
};

export default TrackItem;