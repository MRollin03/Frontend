export interface Track {
  id: string;
  name: string;
  creator: string;
  submittedDate: string;
  votes: number;
}

export interface MapSubmission {
  mapName: string;
  workshopUrl: string;
  description: string;
  creator: string;
}

export interface VerificationData {
  discordUsername: string;
  steamProfileUrl: string;
}