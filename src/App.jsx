import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="fc container">
      <Title/>
      <Contact/>
      <LetterHead/>
      <Experience/>
    </div>
  );
}

function Title() {
  const name = 'Ravi Upadhyay';
  return (
    <div className="fr ft-tl header">
      <div className="cl-pr">{name}</div>
      <div>|</div>
      <div className="cl-sc">Resume</div>
    </div>
  );
}

function Contact() {
  const address = 'Bengaluru - Karnataka';
  const phone = '+91-8967224829';
  const email = 'ravi.upadhyay.pi@gmail.com';
  const websiteLabel = 'Website';
  const websiteLink = 'https://ravi-upadhyay-pi.github.io/resume';

  return (
    <div className="fc ft-h3 cl-sc contact">
      <div className="address">{address}</div>
      <div className="fr line2">
        <div className="phone">{phone}</div>
        <div className="separator">•</div>
        <div className="email">{email}</div>
        <div className="separator">•</div>
        <a className="website" href='{websiteLink}'>{websiteLabel}</a>
      </div>
    </div>
  );
}

function LetterHead() {
  const content = 
    'Passionate about technology and maths. Love to fiddle with \
    new technologies. Strong technical skills for working in a \
    team and successfully completing projects. I love both backend \
    and frontend. I am always looking for finding innovative solutions \
    to technical problems.';
  return (
    <div className="ft-h3 letter-head">
      {content}
    </div>
  );
}

function Experience() {
  return (<div></div>);
}

export default App;
