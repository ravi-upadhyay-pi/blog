import { style } from '@vanilla-extract/css';
import { flexRow, vars } from '../styles.css';

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
