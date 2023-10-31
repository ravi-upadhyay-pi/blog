import { ISkill } from './model';
import { flexColumn } from '../styles.css';
import { borderedContainer } from './Common.css';
import { skillImg } from './Skill.css';

export const Skill = ({ skills }: { skills: ISkill[] }) => (
  <div className={flexColumn}>
    <h2>Skill</h2>
    <div className={borderedContainer}>
      {skills.map((skillLogo) => (
        <img className={skillImg} src={skillLogo} />
      ))}
    </div>
  </div>
);
