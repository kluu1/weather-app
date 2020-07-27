import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: 50 }}>{children}</Container>
    </>
  );
};

export default Layout;
