// import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: rgb(180, 180, 227, 0.4);
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
`;

export const NavItem = styled(NavLink)`
  padding: 20px;
  margin-right: 50px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 4px;
  color: black;

  &.active {
    background-color: #e0b4bb;
    color: white;
    text-decoration: underline;
  }

  :hover:not(.active),
  :focus:not(.active) {
    background-color: #e0b4bb;
    color: white;
  }
`;
