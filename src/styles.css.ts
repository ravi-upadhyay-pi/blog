import { createTheme, globalStyle, style } from '@vanilla-extract/css';

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

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('#root', {
  background: 'white',
  color: 'black',
  display: 'flex',
  fontFamily: "'Fira Sans', sans-serif",
  fontSize: '14px',
  fontSynthesis: 'none',
  justifyContent: 'center',
  lineHeight: '20px',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  WebkitTextSizeAdjust: '100%',
});

globalStyle('h1', {
  color: vars.colors.primary,
  fontFamily: 'Raleway',
  fontSize: '28px',
  fontWeight: 700,
});

globalStyle('h2', {
  color: vars.colors.primary,
  fontFamily: 'Ubuntu',
  fontSize: '24px',
  fontWeight: 500,
});

globalStyle('h3', {
  fontFamily: 'Ubuntu',
  fontSize: '16px',
  fontWeight: 500,
});

globalStyle('h4', {
  fontFamily: 'Ubuntu',
  fontSize: '14px',
  fontWeight: 500,
});

export const flexRow = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.space.medium,
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.medium,
});
