import { style } from '@vanilla-extract/css';
import { flexColumn, flexRow } from '../styles.css';
import { borderedContainer } from './Common.css';

export const educationContainer = style([
  flexColumn,
  {
    alignItems: 'start',
  },
]);

export const educationItemContainer = style([
  borderedContainer,
  flexRow,
  {
    width: '100%',
    justifyContent: 'space-between',
  },
]);
