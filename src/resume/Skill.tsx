import { ISkill } from './data';
import { flexColumn } from '../stitches.config';
import { borderedContainer, skillImg } from './common_style';

export const Skill = ({ skills }: { skills: ISkill[]}) => (
  <div className={flexColumn()}>
    <h2>Skill</h2>
    <div className={borderedContainer()}>
      {
        skills.map(skillLogo => (
          <img className={skillImg()} src={skillLogo} />
        ))
      }
    </div>
  </div>
);