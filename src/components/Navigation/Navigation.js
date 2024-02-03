import { useAuth } from '../../hooks';
import { MainLink, NavContainer } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <MainLink to="/">Home</MainLink>
      {isLoggedIn && <MainLink to="/contacts">Contacts</MainLink>}
    </NavContainer>
  );
};