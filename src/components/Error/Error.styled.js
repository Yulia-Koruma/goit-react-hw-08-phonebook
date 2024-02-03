import styled from 'styled-components';

export const Warning = styled.b`
  color: ${p => p.theme.colors.red};
  font-size: 16px;
  font-weight: 500;
`;
export const ErrorWraper = styled.div`
  max-width: 600px;
  padding: 16px 32px;
  margin: 0 auto;
  text-align: center;
`;