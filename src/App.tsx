import './App.css'

const App = () => (<Resume resume={resume} />);

const Resume = (prop: { resume: IResume }) => (
  <div className="fc container">
    <Title resume={resume} />
    <Contact resume={resume} />
    <LetterHead resume={resume} />
    <Experience resume={resume} />
    <Skill resume={resume} />
  </div>
);

const Title = ({ resume }: { resume: IResume }) => (
  <div className="fr g-8 jc-c">
    <h1 className="cl-pr">{resume.name}</h1>
    <h1>|</h1>
    <h1 className="cl-sc">Resume</h1>
  </div>
);

const Contact = ({ resume }: { resume: IResume }) => (
  <div className="fr cl-sc jc-c g-8">
    <h4 className="address">{resume.place}</h4>
    <h4 className="separator">•</h4>
    <h4 className="phone">{resume.phone}</h4>
    <h4 className="separator">•</h4>
    <h4 className="email">{resume.email}</h4>
  </div>
);

const LetterHead = ({ resume }: { resume: IResume }) => (
  <h3 className="letter-head">{resume.resumeHead}</h3>
);

const Experience = ({ resume }: { resume: IResume }) => (
  <div className="fc g-8">
    <h2 className="cl-pr">Experience</h2>
    {resume.experiences.map(experience =>
      (<CompanyExperience experience={experience} />))}
  </div>
);

const CompanyExperience = ({ experience }: { experience: ICompanyExperience }) => (
  <div className="fc g-8">
    <CompanyExperienceHeader experience={experience} />
    {experience.lineItems.map(lineItem => (<LineItem lineItem={lineItem} />))}
  </div>
);

const CompanyExperienceHeader = ({ experience }: { experience: ICompanyExperience }) => (
  <div className='fr jc-sb py-8 border'>
    <div className='fc jc-sb'>
      <div className="logo"><img src={experience.logo} /></div>
      <h4 className="cl-sc">{experience.place}</h4>
    </div>
    <div className='fc cl-sc jc-sb ai-e'>
      <h4>{experience.place}</h4>
      <h4>{experience.from} - {experience.to}</h4>
    </div>
  </div>
);

const LineItem = ({ lineItem }: { lineItem: ICompanyExperienceLineItem }) => (
  <div className="fr g-8">
    <h1>•</h1>
    <div>
      <h3>{lineItem.breif}</h3>
      <div>{lineItem.description}</div>
    </div>
  </div>
);

const Skill = ({ resume }: { resume: IResume }) => (
  <div className="fc g-8">
    <h2 className="cl-pr">Skill</h2>
    <div className="fr border g-8 py-8 skills">
      {resume.skills.map(skillLogo => (<img className="" src={skillLogo}/>))}
    </div>
  </div>
);

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
  experiences: [{
    logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    jobTitle: 'Software Engineer III',
    place: 'Bengaluru, India',
    from: 'August 2021',
    to: 'Current',
    header:
      'Worked as a Full Stack engineer in Flex team. We developed tools to \
      efficiently manage pooled resources. Resources like compute, storage \
      were allocated through our system for services like GMail, Maps, \
      Youtube, GoogleCloud, Spanner, etc.',
    lineItems: [{
      breif: 'Tiered Resources',
      description:
        'Worked in the simplification effort for tiered compute resource. \
        Earlier tiered resources were designed in a way that caused \
        inconsistency and and could be accessed only through command line. \
        Contributed in the UX and backend design and implementation. Unblocked \
        team in critical blockers by providing solutions and workarounds.',
    }]
  }],
  skills: [
    // Java
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
  ]
};

interface IResume {
  name: string;
  place: string;
  email: string;
  phone: string;
  resumeHead: string;
  experiences: ICompanyExperience[];
  skills: string[];
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

export default App;
