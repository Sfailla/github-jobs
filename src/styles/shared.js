import styled, { css } from 'styled-components';

export const headerHeight = '16rem';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  max-width: 111rem;
  margin: 0 auto;

  ${({ relative }) => relative && `position: relative`};
`;

export const LayoutWrapper = ({ relative = false, children }) => {
  return <Layout relative={relative}>{children}</Layout>;
};

export const SCREEN_SIZES = {
  mobile_sm: 375,
  mobile: 550,
  tablet_sm: 700,
  tablet: 768,
  tablet_lg: 992,
  desktop: 1440,
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
