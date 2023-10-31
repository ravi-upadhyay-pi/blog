import { style } from '@vanilla-extract/css';
import { flexRow } from '../styles.css';

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
