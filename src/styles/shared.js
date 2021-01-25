import styled from 'styled-components';

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
