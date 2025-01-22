export interface ServiceContent {
  title: string;
  intro: string;
  description: string;
  benefits: { title: string; content: string; }[];
  conditions: string[];
  imageSrc: string;
  imageAlt: string;
}

export type ServiceContentMap = {
  [key: string]: ServiceContent;
}; 