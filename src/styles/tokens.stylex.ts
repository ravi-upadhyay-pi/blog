import { defineVars } from '@stylexjs/stylex';

export const spacing = defineVars({
  xsmall: '4px',
  small: '8px',
  medium: '16px',
  large: '32px',
  xlarge: '64px',
});

export const colors = defineVars({
  primary: 'color-mix(in oklab, blue, white 25%)',
  secondary: 'gray',
});
