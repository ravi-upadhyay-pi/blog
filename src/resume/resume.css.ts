import { style } from '@vanilla-extract/css';

import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  space: {
    small: '4px',
    medium: '8px',
  },
  colors: {
    primary: 'brown',
    secondary: 'gray',
  },
});

export const flexRow = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const borderedContainer = style([
  flexRow,
  {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBlock: 8,
    borderBlock: `1px dashed ${vars.colors.primary}`,
  },
]);

export const secondaryColor = style({
  color: vars.colors.secondary,
});

export const pageClass = style({
  background: 'black',
  display: 'flex',
  width: '100vw',
  justifyContent: 'center',
});

export const resumeContainer = style([
  flexColumn,
  {
    background: 'white',
    gap: 16,
    padding: 24,
    width: 1000,
  },
]);

export const educationContainer = style([
  flexColumn,
  {
    alignItems: 'start',
  },
]);

export const educationItemContainer = style([
  borderedContainer,
  flexRow,
  {
    width: '100%',
    justifyContent: 'space-between',
  },
]);

export const companyLogoImg = style({
  objectFit: 'contain',
  maxHeight: 36,
  maxWidth: 100,
});
export const placeDateCt = style([
  flexColumn,
  {
    color: '$secondary',
    justifyContent: 'space-between',
    alignItems: 'end',
  },
]);
export const lineItem = style({
  display: 'block',
});
export const lineItemBrief = style({
  display: 'inline-block',
  marginRight: 4,
});

export const titleContainer = style([
  flexRow,
  {
    justifyContent: 'center',
  },
]);

export const addressContainer = style([
  flexRow,
  {
    justifyContent: 'center',
    alignItems: 'center',
    color: '$secondary',
  },
]);

const icon = style([
  {
    fontSize: 20,
  },
]);

export const iconClass = `${icon} material-icons`;

export const skillImg = style({
  objectFit: 'contain',
  maxHeight: 32,
});
