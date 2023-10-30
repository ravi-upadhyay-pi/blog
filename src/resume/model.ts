export interface IResume {
  header: IHeader;
  experiences: ICompanyExperience[];
  skills: ISkill[];
  educations: IEducation[];
  pdfLink: string;
}

export interface IHeader {
  name: string;
  place: string;
  email: string;
  phone: string;
  resumeHead: string;
}

export interface IEducation {
  institute: string;
  place: string;
  degree: string;
  stream: string;
  startDate: string;
  endDate: string;
}

export interface ICompanyExperience {
  logo: string;
  jobTitle: string;
  place: string;
  from: string;
  to: string;
  header: string;
  lineItems: ICompanyExperienceLineItem[];
}

interface ICompanyExperienceLineItem {
  breif: string;
  description: string;
}

export type ISkill = string;
