import { css, flexColumn, flexRow } from '../styles';

export const AboutMe = () => (
  <div className={aboutMeContainerClass()}>
    <h2>About me</h2>
    <span>
      My name is Ravi Upadhyay. Check my resume <a href="/resume">here</a>.
    </span>
  </div>
);

const aboutMeContainerClass = css({
  marginTop: '16px',
});
