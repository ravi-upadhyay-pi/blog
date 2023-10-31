import { flexColumn } from '../styles.css';
import { style } from '@vanilla-extract/css';

export const containerClass = style([
  flexColumn,
  {
    border: '2px solid #ddd',
    borderRadius: '2px',
    marginTop: '16px',
    padding: '12px',
    width: '800px',
  },
]);

export const listContainerClass = style({
  marginLeft: '16px',
});
