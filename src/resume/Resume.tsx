import { IResume } from './model';
import { RAVI_RESUME } from './data';
import { Header } from './Header';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skill } from './Skill';
import { resumeContainer } from './Resume.css';

interface ResumeProps {
  resume?: IResume;
}

export const Resume = ({ resume }: ResumeProps) => {
  if (!resume) {
    resume = RAVI_RESUME;
  }
  return (
    <div className={resumeContainer}>
      <Header header={resume.header} />
      <Experience experiences={resume.experiences} />
      <Education resume={resume} />
      <Skill skills={resume.skills} />
      <b>
        Download Resume <a href={resume.pdfLink}>PDF</a>.
      </b>
    </div>
  );
};
