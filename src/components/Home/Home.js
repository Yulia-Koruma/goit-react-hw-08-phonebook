import { HomeWraper, MainTitle } from './Home.styled';
import { RiContactsBookFill } from 'react-icons/ri';

export const Home = () => {
  return (
    <HomeWraper>
      <MainTitle>
        Contacts manager welcome page{' '}
        <RiContactsBookFill
          style={{
            width: '80px',
            height: '80px',
            color: '#0390fc',
          }}
        />
      </MainTitle>
    </HomeWraper>
  );
};