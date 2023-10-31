import { IResume } from './model';
import { secondaryColor } from './Common.css';
import { educationContainer, educationItemContainer } from './Education.css';

export const Education = ({ resume }: { resume: IResume }) => (
  <div className={educationContainer}>
    <h2>Education</h2>
    {resume.educations.map((education) => (
      <div className={educationItemContainer}>
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
