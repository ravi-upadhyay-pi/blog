import { style } from '@vanilla-extract/css';
import { flexColumn } from '../styles.css';

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
