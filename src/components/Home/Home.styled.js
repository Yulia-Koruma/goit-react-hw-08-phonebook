import styled from 'styled-components';

export const HomeWraper = styled.div`
  margin-top: 100px;
  padding: 0 ${p => p.theme.spacing(10)};
  width: 100%;
  text-align: center;
`;

export const MainTitle = styled.h1`
  color: ${p => p.theme.colors.purple};
  font-weight: 700;
  font-size: 60px;
  margin: 0;
`;