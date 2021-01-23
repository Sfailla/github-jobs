import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  max-width: 111rem;
  margin: 0 auto;
`;

export const LayoutWrapper = ({ children }) => {
  return <Layout>{children}</Layout>;
};
