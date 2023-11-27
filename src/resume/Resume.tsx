import { RAVI_RESUME } from './lib/data';
import { type ICompanyExperience, type IHeader, type IResume, type ISkill } from './lib/model';
import {
  addressContainer,
  borderedContainer,
  companyLogoImg,
  educationContainer,
  educationItemContainer,
  flexColumn,
  flexRow,
  iconClass,
  lineItem,
  lineItemBrief,
  pageClass,
  placeDateCt,
  resumeContainer,
  secondaryColor,
  skillImg,
  themeClass,
  titleContainer,
} from './resume.css';

const resume = RAVI_RESUME;

export const Resume = () => {
  return (
    <div className={pageClass}>
      <div className={resumeContainer + ' ' + themeClass}>
        <Header header={resume.header} />
        <Experience experiences={resume.experiences} />
        <Education resume={resume} />
        <Skill skills={resume.skills} />
        <b>
          Download Resume <a href={resume.pdfLink}>PDF</a>.
        </b>
      </div>
    </div>
  );
};

export const Header = ({ header }: { header: IHeader }) => (
  <>
    <Title header={header} />
    <Address header={header} />
    <h3>{header.resumeHead}</h3>
  </>
);

const Title = ({ header }: { header: IHeader }) => (
  <div className={titleContainer}>
    <h1>{header.name}</h1>
    <h1>|</h1>
    <h1 className={secondaryColor}>Resume</h1>
  </div>
);

const Address = ({ header }: { header: IHeader }) => (
  <div className={addressContainer}>
    <span className={iconClass}>location_on</span>
    <h4>{header.place}</h4>
    <span className={iconClass}>phone_iphone</span>
    <h4>{header.phone}</h4>
    <span className={iconClass}>email</span>
    <h4>{header.email}</h4>
  </div>
);

export const Education = ({ resume }: { resume: IResume }) => (
  <div className={educationContainer}>
    <h2>Education</h2>
    {resume.educations.map((education, i) => (
      <div key={i} className={educationItemContainer}>
        <div>
          <h3>
            {education.degree} - {education.stream}
          </h3>
          <h4 className={secondaryColor}>{education.institute}</h4>
        </div>
        <div className={secondaryColor}>
          <h4>{education.place}</h4>
          <h4>
            {education.startDate} - {education.endDate}
          </h4>
        </div>
      </div>
    ))}
  </div>
);

export const Experience = ({ experiences }: { experiences: ICompanyExperience[] }) => (
  <div className={flexColumn}>
    <h2>Experience</h2>
    {experiences.map((experience, i) => (
      <CompanyExperience key={i} experience={experience} />
    ))}
  </div>
);

const CompanyExperience = ({ experience }: { experience: ICompanyExperience }) => {
  const lineItems = experience.lineItems.map((item, i) => (
    <div key={i} className={flexRow}>
      <h1 className={secondaryColor}>•</h1>
      <div className={lineItem}>
        <h3 className={lineItemBrief}>{item.breif}</h3>
        <span>{item.description}</span>
      </div>
    </div>
  ));
  return (
    <div className={flexColumn}>
      <div className={borderedContainer}>
        <img className={companyLogoImg} src={experience.logo} />
        <div className={placeDateCt}>
          <h4>{experience.place}</h4>
          <h4>
            {experience.from} - {experience.to}
          </h4>
        </div>
      </div>
      {lineItems}
    </div>
  );
};

export const Skill = ({ skills }: { skills: ISkill[] }) => (
  <div className={flexColumn}>
    <h2>Skill</h2>
    <div className={borderedContainer}>
      {skills.map((skillLogo, i) => (
        <img key={i} className={skillImg} src={skillLogo} />
      ))}
    </div>
  </div>
);
