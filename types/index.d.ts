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
