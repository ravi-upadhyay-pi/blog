import { css, flexRow, flexColumn } from '../stitches.config';

export const resumeContainer = css(flexColumn, {
  background: 'white',
  gap: 16,
  marginBlock: 24,
  padding: 24,
  width: 1000,
});

export const titleContainer = css(flexRow, {
  justifyContent: 'center',
});

export const secondaryColor = css({
  color: '$secondary'
});

export const addressContainer = css(flexRow, {
  justifyContent: 'center',
  alignItems: 'center',
  color: '$secondary',
});

export const icon = css({
  fontSize: 20
});

export const borderedContainer = css(flexRow, {
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBlock: 8,
  borderBlock: '2px dashed $primary',
});

export const companyLogoImg = css({
  objectFit: 'contain',
  maxHeight: 36,
  maxWidth: 100,
});

export const placeDateCt = css(flexColumn, {
  color: '$secondary',
  justifyContent: 'space-between',
  alignItems: 'end',
});

export const lineItem = css({
  display: 'block',
  '& > h3': {
    display: 'inline-block',
    marginRight: 4,
  },
});

export const skillImg = css({
  objectFit: 'contain',
  maxHeight: 32,
});

export const educationContainer = css(flexColumn, {
  alignItems: 'start',
});

export const educationItemContainer = css(borderedContainer, flexRow, {
  width: '100%',
  justifyContent: 'space-between',
});
