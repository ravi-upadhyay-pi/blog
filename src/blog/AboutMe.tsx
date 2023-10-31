import { aboutMeContainerClass } from './AboutMe.css';

export const AboutMe = () => (
  <div className={aboutMeContainerClass}>
    <h2>About me</h2>
    <span>
      My name is Ravi Upadhyay. Check my resume <a href="/resume">here</a>.
    </span>
  </div>
);
