import React from 'react';
import type { VerificationData } from '../types';

interface VerificationSectionProps {
  verificationForm: VerificationData;
  setVerificationForm: React.Dispatch<React.SetStateAction<VerificationData>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const VerificationSection: React.FC<VerificationSectionProps> = ({
  verificationForm,
  setVerificationForm,
  handleSubmit
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationForm({
      ...verificationForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="submission-section" id="verify">
      <h2 className="section-title">Get Verified</h2>
      <div className="form-container">
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--pink-soft)' }}>
          Link your account to unlock voting and exclusive features
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="discordUsername">Discord Username</label>
            <input
              type="text"
              id="discordUsername"
              name="discordUsername"
              placeholder="username#1234"
              value={verificationForm.discordUsername}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="steamProfileUrl">Steam Profile URL</label>
            <input
              type="url"
              id="steamProfileUrl"
              name="steamProfileUrl"
              placeholder="https://steamcommunity.com/id/yourprofile"
              value={verificationForm.steamProfileUrl}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Request Verification
          </button>
        </form>
      </div>
    </section>
  );
};

export default VerificationSection;