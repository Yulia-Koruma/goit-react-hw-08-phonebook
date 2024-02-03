import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainLink = styled(NavLink)`
  color: ${p => p.theme.colors.black};
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.blue};
  }
`;

export const UserNavigationList = styled.ul`
  width: 100%;
  display: flex;
  margin: 0;
  gap: ${p => p.theme.spacing(4)};
`;