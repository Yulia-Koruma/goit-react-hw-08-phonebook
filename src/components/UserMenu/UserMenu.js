import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import { Wraper, UserName, LogOutBtn } from './UserMenu.styled';
import { IoExitOutline } from 'react-icons/io5';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wraper>
      <UserName>Welcome, {user.name}</UserName>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
        <IoExitOutline
          style={{
            width: '40px',
            height: '20px',
          }}
        />
      </LogOutBtn>
    </Wraper>
  );
};