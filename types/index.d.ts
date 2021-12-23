export interface IExperience {
  id?: number;
  jobTitle: string;
  company: string;
  dates: string;
  details: {
    id: number;
    content: string;
  }[];
}

export interface IProjectCard {
  id?: number;
  title: string;
  description: string;
  github: string;
  website?: string;
  technologies: string[];
  inProgress?: boolean;
}
