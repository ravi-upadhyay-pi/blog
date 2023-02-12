import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: 'brown',
      secondary: 'grey',
    },
  }
});

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  ":root": {
    color: "black",
    fontFamily: "'Fira Sans', sans-serif",
    fontSize: "14px",
    lineHeight: "20px",
    fontSynthesis: "none",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTextSizeAdjust: "100%"
  },

  '#root': {
    background: 'black',
    display: 'flex',
    justifyContent: 'center',
  }
});

export const FlexRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
});

export const FlexColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const H1 = styled('h1', {
  color: "$primary",
  fontFamily: "Raleway",
  fontSize: "28px",
  fontWeight: 700,
});

export const H2 = styled('h2', {
  color: "$primary",
  fontFamily: "Ubuntu",
  fontSize: "24px",
  fontWeight: 500
});

export const H3 = styled('h3', {
  fontFamily: "Ubuntu",
  fontSize: "16px",
  fontWeight: 500
});

export const H4 = styled('h4', {
  fontFamily: "Ubuntu",
  fontSize: "14px",
  fontWeight: 500
});
