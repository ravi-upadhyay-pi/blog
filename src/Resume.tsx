import { styled, FlexRow, FlexColumn, H1, H2, H3, H4 } from './stitches.config';

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

export const Resume = ({ resume }: { resume: IResume }) => {
  const title = (
    <Title>
      <H1>{resume.name}</H1>
      <H1>|</H1>
      <ResumeH1>Resume</ResumeH1>
    </Title>
  );
  const address = (
    <Address>
      <Icon className="material-icons">location_on</Icon>
      <H4>{resume.place}</H4>
      <Icon className="material-icons">phone_iphone</Icon>
      <H4>{resume.phone}</H4>
      <Icon className="material-icons">email</Icon>
      <H4>{resume.email}</H4>
    </Address>
  );
  return (
    <ResumeContainer>
      {title}
      {address}
      <H3>{resume.resumeHead}</H3>
      <Experience resume={resume} />
      <Skill resume={resume} />
    </ResumeContainer>
  );
}

const Experience = ({ resume }: { resume: IResume }) => (
  <FlexColumn>
    <H2>Experience</H2>
    {resume.experiences.map(experience =>
      (<CompanyExperience experience={experience} />))}
  </FlexColumn>
);

const CompanyExperience = ({ experience }: { experience: ICompanyExperience }) => (
  <FlexColumn>
    <CompanyExperienceHeader experience={experience} />
    {experience.lineItems.map(lineItem => (<LineItem lineItem={lineItem} />))}
  </FlexColumn>
);

const CompanyExperienceHeader = ({ experience }: { experience: ICompanyExperience }) => (
  <BorderedHeader>
    <CompanyLogo src={experience.logo} />
    <CompanyPlaceDate>
      <H4>{experience.place}</H4>
      <H4>{experience.from} - {experience.to}</H4>
    </CompanyPlaceDate>
  </BorderedHeader>
);

const LineItem = ({ lineItem }: { lineItem: ICompanyExperienceLineItem }) => (
  <FlexRow>
    <H1>•</H1>
    <FlexColumn>
      <H3>{lineItem.breif}</H3>
      <span>{lineItem.description}</span>
    </FlexColumn>
  </FlexRow>
);

const Skill = ({ resume }: { resume: IResume }) => (
  <FlexColumn>
    <H2>Skill</H2>
    <BorderedHeader>
      {
        resume.skills.map(skillLogo => (
          <SkillLogo src={skillLogo} />
        ))
      }
    </BorderedHeader>
  </FlexColumn>
);

const ResumeH1 = styled(H1, {
  color: '$secondary'
});

const Address = styled(FlexRow, {
  justifyContent: 'center',
  alignItems: 'center',
  color: '$secondary',
});

const Icon = styled('span', {
  fontSize: 20
});

const ResumeContainer = styled(FlexColumn, {
  background: 'white',
  gap: 16,
  marginBlock: 24,
  padding: 24,
  width: 1000,
});

const SkillLogo = styled('img', {
  objectFit: 'contain',
  maxHeight: 32,
});


const BorderedHeader = styled(FlexRow, {
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBlock: 8,
  borderBlock: '2px dashed $primary',
});

const CompanyLogo = styled('img', {
  objectFit: 'contain',
  maxHeight: 36,
  maxWidth: 100,
});

const CompanyPlaceDate = styled(FlexColumn, {
  color: '$secondary',
  justifyContent: 'space-between',
  alignItems: 'end',
});

const Title = styled(FlexRow, {
  justifyContent: 'center'
});
