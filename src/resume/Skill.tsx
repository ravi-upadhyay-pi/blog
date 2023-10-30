import { ISkill } from './model';
import { css, flexColumn } from '../styles';
import { borderedContainer } from './styles';

export const Skill = ({ skills }: { skills: ISkill[] }) => (
  <div className={flexColumn()}>
    <h2>Skill</h2>
    <div className={borderedContainer()}>
      {skills.map((skillLogo) => (
        <img className={skillImg()} src={skillLogo} />
      ))}
    </div>
  </div>
);

export const skillImg = css({
  objectFit: 'contain',
  maxHeight: 32,
});
