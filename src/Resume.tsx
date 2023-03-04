import { css, flexRow, flexColumn} from './stitches.config';
import { Resume as resume } from './resume_data';

export interface IResume {
  name: string;
  place: string;
  email: string;
  phone: string;
  resumeHead: string;
  experiences: ICompanyExperience[];
  skills: string[];
  educations: IEducation[];
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

interface IEducation {
  institute: string;
  place: string;
  degree: string;
  stream: string;
  startDate: string;
  endDate: string;
}

export const Resume = () => {
  const iconClass = `${icon()} material-icons`;
  const title = (
    <div className={titleContainer()}>
      <h1>{resume.name}</h1>
      <h1>|</h1>
      <h1 className={secondaryColor()}>Resume</h1>
    </div>
  );
  const address = (
    <div className={addressContainer()}>
      <span className={iconClass}>location_on</span>
      <h4>{resume.place}</h4>
      <span className={iconClass}>phone_iphone</span>
      <h4>{resume.phone}</h4>
      <span className={iconClass}>email</span>
      <h4>{resume.email}</h4>
    </div>
  );
  const experience = (
    <div className={flexColumn()}>
      <h2>Experience</h2>
      {resume.experiences.map(experience =>
        (<CompanyExperience experience={experience} />))}
    </div>
  );
  const educations = (
    <div className={educationContainer()}>
      <h2>Education</h2>
      {
        resume.educations.map(education => (
          <div className={educationItemContainer()}>
            <div>
              <h3>{education.degree} - {education.stream}</h3>
              <h4  className={secondaryColor()}>{education.institute}</h4>             
            </div>
            <div className={secondaryColor()}>
              <h4>{education.place}</h4>
              <h4>{education.startDate} - {education.endDate}</h4>
            </div>
          </div>          
        ))
      }
    </div>
  );
  const skills = (
    <div className={flexColumn()}>
      <h2>Skill</h2>
      <div className={borderedContainer()}>
        {
          resume.skills.map(skillLogo => (
            <img className={skillImg()} src={skillLogo} />
          ))
        }
      </div>
    </div>
  );  
  return (
    <div className={resumeContainer()}>
      {title}
      {address}
      <h3>{resume.resumeHead}</h3>
      {experience}
      {educations}
      {skills}
    </div>
  );
}

const CompanyExperience = ({ experience }: { experience: ICompanyExperience }) => {
  const lineItems = experience.lineItems.map(item => (
    <div className={flexRow()}>
      <h1 className={secondaryColor()}>•</h1>
      <div className={lineItem()}>
        <h3>{item.breif}</h3>
        <span>{item.description}</span>
      </div>
    </div>
  ));
  return (
    <div className={flexColumn()}>
      <div className={borderedContainer()}>
        <img className={companyLogoImg()} src={experience.logo} />
        <div className={placeDateCt()}>
          <h4>{experience.place}</h4>
          <h4>{experience.from} - {experience.to}</h4>
        </div>
      </div>
      {lineItems}
    </div>
  );
};

/**
 * Styles
 */
const resumeContainer = css(flexColumn, {
  background: 'white',
  gap: 16,
  marginBlock: 24,
  padding: 24,
  width: 1000,
});

const titleContainer = css(flexRow, {
  justifyContent: 'center',
});

const secondaryColor = css({
  color: '$secondary'
});

const addressContainer = css(flexRow, {
  justifyContent: 'center',
  alignItems: 'center',
  color: '$secondary',
});

const icon = css({
  fontSize: 20
});

const borderedContainer = css(flexRow, {
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBlock: 8,
  borderBlock: '2px dashed $primary',
});

const companyLogoImg = css({
  objectFit: 'contain',
  maxHeight: 36,
  maxWidth: 100,
});

const placeDateCt = css(flexColumn, {
  color: '$secondary',
  justifyContent: 'space-between',
  alignItems: 'end',
});

const lineItem = css({
  display: 'block',
  '& > h3': {
    display: 'inline-block',
    marginRight: 4,
  },
});

const skillImg = css({
  objectFit: 'contain',
  maxHeight: 32,
});

const educationContainer = css(borderedContainer, flexColumn, {
  alignItems: 'start',
});

const educationItemContainer = css(flexRow, {
  width: '100%',
  justifyContent: 'space-between',
});
