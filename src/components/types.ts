// /components/types.ts

export interface TeamDetails {
  education: string;
  experience: string[];
  approach: string;
}

export interface TeamMemberType {
  name: string;
  qualifications: string[];
  role: string;
  shortBio: string;
  details: TeamDetails;
  interests: string[];
  image: string;
}
