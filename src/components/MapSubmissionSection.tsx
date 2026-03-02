import React from 'react';
import type { MapSubmission } from '../types/index.ts';

interface MapSubmissionSectionProps {
  mapForm: MapSubmission;
  setMapForm: React.Dispatch<React.SetStateAction<MapSubmission>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const MapSubmissionSection: React.FC<MapSubmissionSectionProps> = ({
  mapForm,
  setMapForm,
  handleSubmit
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMapForm({
      ...mapForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="submission-section" id="submit">
      <h2 className="section-title">Submit Your Map</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="mapName">Map Name</label>
            <input
              type="text"
              id="mapName"
              name="mapName"
              placeholder="Enter track name"
              value={mapForm.mapName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="workshopUrl">Steam Workshop URL</label>
            <input
              type="url"
              id="workshopUrl"
              name="workshopUrl"
              placeholder="https://steamcommunity.com/sharedfiles/filedetails/?id=..."
              value={mapForm.workshopUrl}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Tell us about your track..."
              value={mapForm.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="creator">Your Name</label>
            <input
              type="text"
              id="creator"
              name="creator"
              placeholder="Track creator name"
              value={mapForm.creator}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Map
          </button>
        </form>
      </div>
    </section>
  );
};

export default MapSubmissionSection;