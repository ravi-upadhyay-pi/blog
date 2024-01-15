import { create, props } from '@stylexjs/stylex';
import { commonStyles } from '../styles/common';
import { colors, spacing } from '../styles/tokens.stylex';
import { RAVI_RESUME } from './shared/data';
import { type ICompanyExperience, type IHeader, type IResume, type ISkill } from './shared/model';

const resume = RAVI_RESUME;

export const Resume = () => {
  return (
    <div {...props(styles.page)}>
      <div {...props(styles.resume)}>
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
    <h3 {...props(commonStyles.h3)}>{header.resumeHead}</h3>
  </>
);

const Title = ({ header }: { header: IHeader }) => (
  <div {...props(styles.title)}>
    <h1 {...props(commonStyles.h1)}>{header.name}</h1>
    <h1 {...props(commonStyles.h1)}>|</h1>
    <h1 {...props(commonStyles.h1, styles.secondaryColor)}>Resume</h1>
  </div>
);

const Address = ({ header }: { header: IHeader }) => (
  <div {...props(styles.address)}>
    <span {...props(styles.icon)}>location_on</span>
    <h4 {...props(commonStyles.h4)}>{header.place}</h4>
    <span {...props(styles.icon)}>phone_iphone</span>
    <h4 {...props(commonStyles.h4)}>{header.phone}</h4>
    <span {...props(styles.icon)}>email</span>
    <h4 {...props(commonStyles.h4)}>{header.email}</h4>
  </div>
);

export const Education = ({ resume }: { resume: IResume }) => (
  <div {...props(styles.education)}>
    <h2 {...props(commonStyles.h2)}>Education</h2>
    {resume.educations.map((education, i) => (
      <div key={i} {...props(styles.border, styles.educationItem)}>
        <div>
          <h3 {...props(commonStyles.h3)}>
            {education.degree} - {education.stream}
          </h3>
          <h4 {...props(styles.secondaryColor)}>{education.institute}</h4>
        </div>
        <div {...props(styles.secondaryColor)}>
          <h4 {...props(commonStyles.h4)}>{education.place}</h4>
          <h4 {...props(commonStyles.h4)}>
            {education.startDate} - {education.endDate}
          </h4>
        </div>
      </div>
    ))}
  </div>
);

export const Experience = ({ experiences }: { experiences: ICompanyExperience[] }) => (
  <div {...props(styles.column)}>
    <h2 {...props(commonStyles.h2)}>Experience</h2>
    {experiences.map((experience, i) => (
      <CompanyExperience key={i} experience={experience} />
    ))}
  </div>
);

const CompanyExperience = ({ experience }: { experience: ICompanyExperience }) => {
  const lineItems = experience.lineItems.map((item, i) => (
    <div key={i} {...props(styles.row)}>
      <h1 {...props(styles.secondaryColor)}>•</h1>
      <div {...props(styles.experienceItem)}>
        <h3 {...props(commonStyles.h3, styles.experienceItemBrief)}>{item.breif}</h3>
        <span>{item.description}</span>
      </div>
    </div>
  ));
  return (
    <div {...props(styles.column)}>
      <div {...props(styles.border)}>
        <img {...props(styles.companyLogo)} src={experience.logo} />
        <div {...props(styles.placeDate)}>
          <h4 {...props(commonStyles.h4)}>{experience.place}</h4>
          <h4 {...props(commonStyles.h4)}>
            {experience.from} - {experience.to}
          </h4>
        </div>
      </div>
      {lineItems}
    </div>
  );
};

export const Skill = ({ skills }: { skills: ISkill[] }) => (
  <div {...props(styles.column)}>
    <h2 {...props(commonStyles.h2)}>Skill</h2>
    <div {...props(styles.border)}>
      {skills.map((skillLogo, i) => (
        <img key={i} {...props(styles.skillImg)} src={skillLogo} />
      ))}
    </div>
  </div>
);

const styles = create({
  border: {
    alignItems: 'center',
    borderBlock: `1px dashed ${colors.primary}`,
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.small,
    justifyContent: 'space-between',
    paddingBlock: spacing.xsmall,
  },
  secondaryColor: {
    color: colors.secondary,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.small,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.small,
  },
  page: {
    background: 'black',
    display: 'flex',
    width: '100vw',
    justifyContent: 'center',
  },
  resume: {
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    padding: 24,
    width: 1000,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.small,
  },
  address: {
    alignItems: 'center',
    color: '$secondary',
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.small,
    justifyContent: 'center',
  },
  icon: {
    fontFamily: 'Material Icons',
    fontSize: 20,
  },
  education: {
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.small,
  },
  educationItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.small,
    justifyContent: 'space-between',
    width: '100%',
  },
  companyLogo: {
    objectFit: 'contain',
    maxHeight: 36,
    maxWidth: 100,
  },
  placeDate: {
    alignItems: 'end',
    color: '$secondary',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xsmall,
    justifyContent: 'space-between',
  },
  experienceItem: {
    display: 'block',
  },
  experienceItemBrief: {
    display: 'inline-block',
    marginRight: 4,
  },
  skillImg: {
    objectFit: 'contain',
    maxHeight: 32,
  },
});
