import { IHeader } from './data';
import { titleContainer, secondaryColor } from './common_style';
import { addressContainer } from "./common_style";
import { IResume } from "./data";
import { icon } from "./common_style";

const iconClass = `${icon()} material-icons`;

export const Header = ({ header }: { header: IHeader }) => (
  <>
    <Title header={header} />
    <Address header={header} />
    <h3>{header.resumeHead}</h3>
  </>
);


const Title = ({ header }: { header: IHeader }) => (
  <div className={titleContainer()}>
    <h1>{header.name}</h1>
    <h1>|</h1>
    <h1 className={secondaryColor()}>Resume</h1>
  </div>
);

const Address = ({ header }: { header: IHeader }) => (
  <div className={addressContainer()}>
    <span className={iconClass}>location_on</span>
    <h4>{header.place}</h4>
    <span className={iconClass}>phone_iphone</span>
    <h4>{header.phone}</h4>
    <span className={iconClass}>email</span>
    <h4>{header.email}</h4>
  </div>
)
