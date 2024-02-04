import { HomeWraper, MainTitle } from './Home.styled';
import 'animate.css';

export const Home = () => {
  return (
    <HomeWraper>
      <MainTitle className='animate__animated animate__pulse animate__infinite animate__slower'>
        Contacts manager{' '}
      </MainTitle>
    </HomeWraper>
  );
};