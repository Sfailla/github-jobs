import styled, { css } from 'styled-components';

export const headerHeight = '16rem';
export const backgroundColor = '#F4F6F8';

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 111rem;
  margin: 0 auto;
  position: relative;
`;

export const SCREEN_SIZES = {
  mobile_sm: 375,
  mobile: 550,
  tablet_sm: 700,
  tablet: 768,
  tablet_lg: 992,
  desktop: 1440
};

export const media = Object.keys(SCREEN_SIZES).reduce((accumulator, label) => {
  const emSize = SCREEN_SIZES[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
