import { create } from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const commonStyles = create({
  h1: {
    color: colors.primary,
    fontFamily: 'Raleway',
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 12px 0',
  },
  h2: {
    color: colors.primary,
    fontFamily: 'Ubuntu',
    fontSize: '24px',
    fontWeight: '500',
    margin: '0 0 12px 0',
  },
  h3: {
    fontSize: '16px',
    fontFamily: 'Ubuntu',
    fontWeight: '500',
    margin: '0 0 8px 0',
  },
  h4: {
    fontSize: '14px',
    fontFamily: 'Ubuntu',
    fontWeight: '500',
    margin: '0 0 8px 0',
  },
  p: {
    margin: '0 0 8px 0',
  },
  materialIcons: {
    fontFamily: 'Material Icons',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: '24px',
    display: 'inline-block',
    lineHeight: '1',
    textTransform: 'none',
    letterSpacing: 'normal',
    wordWrap: 'normal',
    whiteSpace: 'nowrap',
    direction: 'ltr',
    webKitFontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility',
    mozOsFontSmoothing: 'grayscale',
    fontFeatureSettings: 'liga',
  },
});
