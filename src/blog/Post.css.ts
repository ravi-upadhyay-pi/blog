import { style } from '@vanilla-extract/css';
import { flexColumn } from '../styles.css';

export const postContainerClass = style([
  flexColumn,
  {
    marginBlock: '24px',
    maxWidth: '50em',
    overflowX: 'auto',
    width: '80%',
  },
]);

export const lineClass = style({
  backgroundColor: '#900',
  height: '1px',
});

export const contentClass = style([flexColumn]);
