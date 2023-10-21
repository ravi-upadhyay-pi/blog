// import { Experience } from './Experience';
// import { Education } from './Education';
import { IResume } from "./data";
import { resumeContainer} from './common_style';
import { Header } from './Header';
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Skill } from "./Skill";


export const Resume = ({resume}: {resume: IResume}) => {
  return (
    <div className={resumeContainer()}>
      <Header header={resume.header} />
      <Experience experiences={resume.experiences} />
      <Education resume={resume} />
      <Skill skills={resume.skills} />
    </div>
  );
};
