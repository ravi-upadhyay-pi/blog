import { ICompanyExperience } from './model';
import { flexColumn, flexRow } from '../styles.css';
import { borderedContainer, secondaryColor } from './Common.css';
import {
  lineItem,
  lineItemBrief,
  companyLogoImg,
  placeDateCt,
} from './Experience.css';

export const Experience = ({
  experiences,
}: {
  experiences: ICompanyExperience[];
}) => (
  <div className={flexColumn}>
    <h2>Experience</h2>
    {experiences.map((experience) => (
      <CompanyExperience experience={experience} />
    ))}
  </div>
);

const CompanyExperience = ({
  experience,
}: {
  experience: ICompanyExperience;
}) => {
  const lineItems = experience.lineItems.map((item) => (
    <div className={flexRow}>
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
