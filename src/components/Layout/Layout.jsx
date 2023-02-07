import { Outlet } from 'react-router-dom';
import { Nav, NavItem } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Nav>
        <NavItem to="/">Home</NavItem>

        <NavItem to="/movies">Movies</NavItem>
      </Nav>
      <Outlet />
    </>
  );
};

export default Layout;
