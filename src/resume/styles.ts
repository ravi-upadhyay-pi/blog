import { css, flexRow, flexColumn } from '../styles';

export const secondaryColor = css({
  color: '$secondary',
});

export const borderedContainer = css(flexRow, {
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBlock: 8,
  borderBlock: '2px dashed $primary',
});
