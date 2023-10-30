import { IHeader } from './model';
import { secondaryColor } from './styles';
import { IResume } from './model';
import { css, flexRow } from '../styles';

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
);

const titleContainer = css(flexRow, {
  justifyContent: 'center',
});

const addressContainer = css(flexRow, {
  justifyContent: 'center',
  alignItems: 'center',
  color: '$secondary',
});

const icon = css({
  fontSize: 20,
});

const iconClass = `${icon()} material-icons`;
