import { MainLink, UserNavigationList } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <UserNavigationList>
      <li>
        <MainLink to="/register">Register</MainLink>
      </li>

      <li>
        <MainLink to="/login">Log In</MainLink>
      </li>
    </UserNavigationList>
  );
};