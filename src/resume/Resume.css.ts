import { style } from '@vanilla-extract/css';
import { flexColumn } from '../styles.css';

export const resumeContainer = style([
  flexColumn,
  {
    background: 'white',
    gap: 16,
    marginBlock: 24,
    padding: 24,
    width: 1000,
  },
]);
