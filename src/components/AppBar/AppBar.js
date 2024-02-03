import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks';
import { NavigationHeader, NavigationList } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationHeader>
      <NavigationList>
        <li>
          <Navigation />
        </li>
        <li>{isLoggedIn ? <UserMenu /> : <AuthNav />}</li>
      </NavigationList>
    </NavigationHeader>
  );
};