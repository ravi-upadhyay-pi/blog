import style from './resume.module.css';

export const Resume = ({ resume }: { resume: IResume }) => {
    const title = (
        <div className="fr g-8 jc-c">
            <h1 className="cl-pr">{resume.name}</h1>
            <h1>|</h1>
            <h1 className="cl-sc">Resume</h1>
        </div>
    );
    const address = (
        <div className="fr jc-c ai-c g-8 cl-sc address">
            <span className={["material-icons", style.icons].join(' ')}>location_on</span>
            <h4>{resume.place}</h4>
            <span className={["material-icons", style.icons].join(' ')}>phone_iphone</span>
            <h4>{resume.phone}</h4>
            <span className={["material-icons", style.icons].join(' ')}>email</span>
            <h4>{resume.email}</h4>
        </div>
    );
    return (
        <div className={['fc', style.container].join(' ')}>
            {title}
            {address}
            <h3>{resume.resumeHead}</h3>
            <Experience resume={resume} />
            <Skill resume={resume} />
        </div>
    );
}

const Experience = ({ resume }: { resume: IResume }) => (
    <div className="fc g-8">
        <h2 className="cl-pr">Experience</h2>
        {resume.experiences.map(experience =>
            (<CompanyExperience experience={experience} />))}
    </div>
);

const CompanyExperience = ({ experience }: { experience: ICompanyExperience }) => (
    <div className="fc g-8">
        <CompanyExperienceHeader experience={experience} />
        {experience.lineItems.map(lineItem => (<LineItem lineItem={lineItem} />))}
    </div>
);

const CompanyExperienceHeader = ({ experience }: { experience: ICompanyExperience }) => (
    <div className={['fr', 'jc-sb', 'py-8', style.border].join(' ')}>
        <div className='fc jc-sb'>
            <div className="logo">
                <img className={style.companyLogo} src={experience.logo} />
            </div>
            <h4 className="cl-sc">{experience.place}</h4>
        </div>
        <div className='fc cl-sc jc-sb ai-e'>
            <h4>{experience.place}</h4>
            <h4>{experience.from} - {experience.to}</h4>
        </div>
    </div>
);

const LineItem = ({ lineItem }: { lineItem: ICompanyExperienceLineItem }) => (
    <div className="fr g-8">
        <h1>•</h1>
        <div>
            <h3>{lineItem.breif}</h3>
            <div>{lineItem.description}</div>
        </div>
    </div>
);

const Skill = ({ resume }: { resume: IResume }) => (
    <div className="fc g-8">
        <h2 className="cl-pr">Skill</h2>
        <div className={['fr', 'jc-sb', 'g-8', 'py-8', style.border].join(' ')}>
            {resume.skills.map(skillLogo => (<img className={style.skillLogo} src={skillLogo} />))}
        </div>
    </div>
);

export interface IResume {
    name: string;
    place: string;
    email: string;
    phone: string;
    resumeHead: string;
    experiences: ICompanyExperience[];
    skills: string[];
}

interface ICompanyExperience {
    logo: string;
    jobTitle: string;
    place: string;
    from: string;
    to: string;
    header: string;
    lineItems: ICompanyExperienceLineItem[];
}

interface ICompanyExperienceLineItem {
    breif: string;
    description: string;
}
