import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (<Resume resume={resume}/>)  
}

function Resume(prop: {resume: IResume}) {
  return (
    <div className="fc container">
      <Title resume={resume}/>
      <Contact resume={resume}/>
      <LetterHead resume={resume}/>
      <Experience resume={resume}/>
    </div>
  );
}

function Title({resume}: {resume: IResume}) {
  return (
    <div className="fr ft-tl header">
      <div className="cl-pr">{resume.name}</div>
      <div>|</div>
      <div className="cl-sc">Resume</div>
    </div>
  );
}

function Contact({resume}: {resume: IResume}) {
  return (
    <div className="fc ft-h3 cl-sc contact">
        <div className="fr line2">
        <div className="address">{resume.place}</div>
        <div className="separator">•</div>
        <div className="phone">{resume.phone}</div>
        <div className="separator">•</div>
        <div className="email">{resume.email}</div>
      </div>
    </div>
  );
}

function LetterHead({resume}: {resume: IResume}) {
  return (
    <div className="ft-h3 letter-head">{resume.resumeHead}</div>
  );
}

function Experience({resume}: {resume: IResume}) {
  return (
    <div>
      <div className="ft-h1 cl-pr experience-header">Experience</div>
    </div>
  );
}

function ExperienceItem({experience}: {experience: ICompanyExperience}) {
  return (
    <div></div>
  );
}

const resume: IResume = {
  name: 'Ravi Upadhyay',
  place: 'Bengaluru - Karnataka',
  email: 'ravi.upadhyay.pi@gmail.com',
  phone: '+91-8967224829',
  resumeHead: 
    'Passionate about technology and maths. Love to fiddle with \
    new technologies. Strong technical skills for working in a \
    team and successfully completing projects. I love both backend \
    and frontend. I am always looking for finding innovative solutions \
    to technical problems.',
  experiences: [],
  skills: []
};

interface IResume {
  name: string;
  place: string;
  email: string;
  phone: string;
  resumeHead: string;
  experiences: ICompanyExperience[];
  skills: Skill[];
}

interface ICompanyExperience {
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

interface Skill {
  text: string;
  logo: string;
}

export default App;
