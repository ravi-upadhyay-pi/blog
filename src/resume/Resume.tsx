import { IResume } from './model';
import { RAVI_RESUME } from './data';
import { css, flexColumn } from '../styles';
import { Header } from './Header';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skill } from './Skill';

interface ResumeProps {
  resume?: IResume;
}

export const Resume = ({ resume }: ResumeProps) => {
  if (!resume) {
    resume = RAVI_RESUME;
  }
  return (
    <div className={resumeContainer()}>
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

export const resumeContainer = css(flexColumn, {
  background: 'white',
  gap: 16,
  marginBlock: 24,
  padding: 24,
  width: 1000,
});
