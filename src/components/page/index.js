import React from 'react';
import { Container } from './pageStyles';

const PageContext = React.createContext('');

function Page({ name, children }) {
  const [page, setPage] = React.useState('jobs');

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {page === name ? <Container>{children}</Container> : null}
    </PageContext.Provider>
  );
}

export { PageContext };
export default Page;
