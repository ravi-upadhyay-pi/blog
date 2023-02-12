import { styled, css, flexRow, flexColumn} from './stitches.config';
import { Resume as resume } from './ResumeData';

export interface IResume {
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
  return (
    <div className={resumeContainer()}>
      {title}
      {address}
      <h3>{resume.resumeHead}</h3>
      <Experience resume={resume} />
      <Skills resume={resume} />
    </div>
  );
}

const Experience = ({ resume }: { resume: IResume }) => (
  <div className={flexColumn()}>
    <h2>Experience</h2>
    {resume.experiences.map(experience =>
      (<CompanyExperience experience={experience} />))}
  </div>
);

const CompanyExperience = ({ experience }: { experience: ICompanyExperience }) => (
  <div className={flexColumn()}>
    <div className={borderedContainer()}>
      <img className={companyLogoImg()} src={experience.logo} />
      <div className={placeDateCt()}>
        <h4>{experience.place}</h4>
        <h4>{experience.from} - {experience.to}</h4>
      </div>
    </div>
    {
      experience.lineItems.map(item => (
        <div className={flexRow()}>
          <h1 className={secondaryColor()}>•</h1>
          <div className={lineItem()}>
            <h3>{item.breif}</h3>
            <span>{item.description}</span>
          </div>
        </div>
      ))
    }
  </div>
);

const SkillImg = styled('img', {
  objectFit: 'contain',
  maxHeight: 32,
});

const Skills = ({ resume }: { resume: IResume }) => (
  <div className={flexColumn()}>
    <h2>Skill</h2>
    <div className={borderedContainer()}>
      {
        resume.skills.map(skillLogo => (
          <SkillImg src={skillLogo} />
        ))
      }
    </div>
  </div>
);

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
